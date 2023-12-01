import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import json from "@rollup/plugin-json";

const extensions = [".js", ".ts"];

export default [
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.js", format: "esm" }],
    plugins: [
      commonjs(),
      typescript({
        clean: true,
        sourceMap: true,
      }),
      resolve({ extensions, browser: true, preferBuiltins: true }),
      json(),
    ],
  },
];
