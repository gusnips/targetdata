# targetdata

TypeScript client for the [TargetData](https://targetdata.com.br) API: credit reports, compliance checks, vehicle data and people lookups for Brazil. Unofficial, not made by TargetData.

```bash
npm install targetdata
# or
bun add targetdata
```

## First call

```ts
import { TargetDataClient } from "targetdata";

const targetdata = new TargetDataClient({ apiKey: "...", apiSecret: "..." });

const { header, results } = await targetdata.hotphone.pf({ cpf: "46020967867" });

console.log(results.numero_celular?.numero_telefone);
```

Before it works, do two things in the Smart platform (the TargetData dashboard):

1. Create an API key and an API secret.
2. Add your server's IP to the whitelist, in the Integração menu. TargetData only answers calls from IPs on that list.

Keep the secret on your server. Never ship it to a browser.

To try the API without real people, TargetData lists these sandbox documents in its docs: CPF `46020967867` and `75032030058`, CNPJ `73985523000108` and `45543915000181`.

## Finding the method you need

Every endpoint in TargetData's docs is one method. The name comes from the path:

| API path                               | In the SDK                              |
| -------------------------------------- | --------------------------------------- |
| `POST /v1/hotphone/pf`                 | `targetdata.hotphone.pf()`              |
| `POST /v2/hotphone/pf`                 | `targetdata.hotphone.pfV2()`            |
| `POST /v1/analise_de_credito/pf/basic` | `targetdata.analiseDeCredito.pfBasic()` |
| `POST /v1/veiculos/placa-chassi`       | `targetdata.veiculos.placaChassi()`     |
| `POST /v1/sintegra`                    | `targetdata.sintegra.query()`           |

A path with nothing after the product name becomes `query()`. Hover a method in your editor to see where it sits in TargetData's docs.

Modules: `search`, `hotphone`, `receitaFederal`, `negativacao`, `sintegra`, `monitora`, `analiseDeCredito`, `beneficiarioSocial`, `perfilEconomicoSocial`, `compliance`, `processosJudiciais`, `impedidos`, `var`, `dueDiligence360`, `restricoesInternacionais`, `organizacoesCriminosas`, `veiculos`, `monteSuaConsulta`, `obito`, `prove`, `transaction`, `capivara`, `onboarding`, `searchMae`, `health`.

Params and answers keep the API's own field names (`cpf`, `agrupamentos_retorno`, `request_id`), so what you read in TargetData's docs is what you type.

## Searching by data

`search` takes a list of documents, or a data search when you do not have one. You pay for what comes back, so pick the groups you need:

```ts
const found = await targetdata.search.pf({
  busca_dinamica: [{ nome_completo: "Maria da Silva", data_nascimento: "1980-05-17" }],
  limite: 3,
  agrupamentos_retorno: ["cadastral", "contato"],
});
```

## Errors

Every failure throws a `TargetDataError`:

```ts
import { TargetDataError } from "targetdata";

try {
  await targetdata.compliance.pfBasic({ cpf: "46020967867" });
} catch (error) {
  if (error instanceof TargetDataError) {
    console.log(error.status); // HTTP status, or 0 if no answer came back
    console.log(error.code); // TargetData's code_error, for example 1104
    console.log(error.requestId); // give this to TargetData support
  }
}
```

Codes you will meet first (the messages are TargetData's, in Portuguese):

| Code | HTTP | TargetData says                                              |
| ---- | ---- | ------------------------------------------------------------ |
| 1006 | 401  | A chave da api está inválida                                 |
| 1007 | 429  | Limite de requisições excedido, tente novamente em instantes |
| 1104 | 400  | Saldo insuficiente                                           |
| 1107 | 400  | Parâmetro ausente: [campo]                                   |
| 2001 | 400  | CPF/CNPJ inválido                                            |
| 3002 | 400  | Sem resultados                                               |

## Cost and limits

- TargetData bills only answers with HTTP 200.
- The default limit is 10 requests per second per account. The SDK does not slow you down, so queue your own calls if you send many. Ask TargetData to raise the limit if you need more.
- On HTTP 500 the client tries again, up to 2 more times, because TargetData recommends it and a 500 is not billed. It never retries any other error.

## Options

```ts
new TargetDataClient({
  apiKey: "...",
  apiSecret: "...",
  baseUrl: "https://api.targetdata.com.br/api", // default
  timeout: 60_000, // milliseconds, default
  retries: 2, // after an HTTP 500, default
});
```

## About the types

Request types follow TargetData's parameter tables. Answer types are read from the example answers in TargetData's docs, because the docs have no schema. So:

- `header` is always typed. Every other field is optional.
- A field typed `unknown` was `null` in every example and the docs do not name its type.
- Three products are marked `@experimental` because TargetData lists them as under construction: Negativação, Due Diligence 360 and Óbitos Cartório.
- Not included: Óbitos CNF, which TargetData marks as discontinued.

If a real answer does not match its type, [open an issue](https://github.com/gusnips/targetdata/issues) with the endpoint and the field.

## License

MIT
