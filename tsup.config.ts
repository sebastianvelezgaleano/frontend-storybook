import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: {
    compilerOptions: {
      jsx: "react-jsx",
    },
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: true,
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.bundle = true;
    options.loader = {
      ".css": "css",
    };
    options.jsx = "automatic";
  },
  outExtension({ format }) {
    return {
      js: format === "cjs" ? ".cjs" : ".js",
    };
  },
});
