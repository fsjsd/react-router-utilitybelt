import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import minify from "rollup-plugin-babel-minify";

const NODE_ENV = process.env.NODE_ENV || "development";

console.log("rollup", NODE_ENV);

export default {
  input: "./src/exports.js",
  output: {
    file: "./lib/dev.js",
    format: "cjs"
  },
  external: ["react", "react-dom", "react-router-dom", "fsjsd-lgr"],
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
    })
  ],
  external: id => /^react/.test(id)
};
