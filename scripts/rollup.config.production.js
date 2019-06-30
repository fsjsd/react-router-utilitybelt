import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import minify from "rollup-plugin-babel-minify";
import cleanup from "rollup-plugin-cleanup";

const NODE_ENV = process.env.NODE_ENV || "development";

console.log("rollup", NODE_ENV);

export default {
  input: "./src/exports.js",
  output: {
    file: "./lib/prod.js",
    format: "cjs"
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    resolve({
      dedupe: ["react", "react-dom"],
      extensions: [".js", ".jsx"]
    }),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    }),
    minify(),
    cleanup()
  ],
  external: id => /^react/.test(id)
};
