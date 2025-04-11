import terser from "@rollup/plugin-terser";
export default {
  input: "index.js",
  output: {
    file: "dist/beravote.min.js",
    format: "iife", 
    name: "ApiClient",
  },
  plugins: [terser()]
};
