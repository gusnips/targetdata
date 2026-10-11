import { afterAll, beforeAll, beforeEach, describe, expect, test } from "bun:test";
import { TargetDataClient } from "./client";
import { TargetDataError } from "./errors";

interface Seen {
  path: string;
  body: unknown;
}

let seen: Seen[] = [];
let answers: Response[] = [];
let server: ReturnType<typeof Bun.serve>;

beforeAll(() => {
  server = Bun.serve({
    port: 0,
    async fetch(req) {
      seen.push({ path: new URL(req.url).pathname, body: await req.json() });
      return answers.shift() ?? Response.json({ results: [] });
    },
  });
});
afterAll(() => server.stop(true));
beforeEach(() => {
  seen = [];
  answers = [];
});

const newClient = (retries = 0) =>
  new TargetDataClient({
    apiKey: "key",
    apiSecret: "secret",
    baseUrl: `http://localhost:${server.port}/api`,
    retries,
  });

describe("TargetDataClient", () => {
  test("sends the key and secret in the body, next to the params", async () => {
    await newClient().hotphone.pf({ cpf: "46020967867" });

    expect(seen).toEqual([
      {
        path: "/api/v1/hotphone/pf",
        body: { cpf: "46020967867", api_key: "key", api_secret: "secret" },
      },
    ]);
  });

  test("asks for both credentials", () => {
    expect(() => new TargetDataClient({ apiKey: "key", apiSecret: "" })).toThrow(
      "needs both apiKey and apiSecret",
    );
  });

  test("reads the error sent before login", async () => {
    answers = [
      Response.json(
        { code_error: 1006, message_error: "A chave da api está inválida" },
        { status: 401 },
      ),
    ];

    const error = await newClient()
      .hotphone.pf({ cpf: "1" })
      .catch((e: unknown) => e);

    expect(error).toBeInstanceOf(TargetDataError);
    expect(error).toMatchObject({ status: 401, code: 1006 });
    expect((error as TargetDataError).message).toContain("A chave da api está inválida");
  });

  test("reads the error sent after login, with its request id", async () => {
    answers = [
      Response.json(
        {
          header: { code_error: 1104, message_error: "Saldo insuficiente", request_id: "abc-123" },
        },
        { status: 400 },
      ),
    ];

    const error = await newClient()
      .hotphone.pf({ cpf: "1" })
      .catch((e: unknown) => e);

    expect(error).toMatchObject({ status: 400, code: 1104, requestId: "abc-123" });
  });

  test("retries a 500 and stops at the first answer that works", async () => {
    answers = [new Response("{}", { status: 500 }), Response.json({ results: [] })];

    await newClient(1).hotphone.pf({ cpf: "1" });

    expect(seen).toHaveLength(2);
  });

  test("does not retry any other error", async () => {
    answers = [Response.json({ code: "429", message: "Rate Limit" }, { status: 429 })];

    const error = await newClient(2)
      .hotphone.pf({ cpf: "1" })
      .catch((e: unknown) => e);

    expect(seen).toHaveLength(1);
    expect(error).toMatchObject({ status: 429, code: 429 });
  });
});
