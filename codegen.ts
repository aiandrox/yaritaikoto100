import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql/enterprise",
  documents: ["src/**/*.graphql"],
  generates: {
    "src/app/__generated__/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
    "src/app/__generated__": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.tsx",
        baseTypesPath: "graphql.ts",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
    },
  },
};
export default config;
