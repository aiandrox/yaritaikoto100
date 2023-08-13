process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // SSL証明書の検証を無効にする

import type { CodegenConfig } from "@graphql-codegen/cli";

import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

const config: CodegenConfig = {
  overwrite: true,
  schema: { "https://localhost:3000/graphql/enterprise": {} },
  documents: ["src/**/*.graphql"],
  generates: {
    "src/app/__generated__/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        scalars: {
          ISO8601Date: "string",
          ISO8601DateTime: "string",
        },
      },
    },
    "src/app/__generated__": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.tsx",
        baseTypesPath: "graphql.ts",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
      config: {
        scalars: {
          ISO8601Date: "string",
          ISO8601DateTime: "string",
        },
      },
    },
  },
};
export default config;
