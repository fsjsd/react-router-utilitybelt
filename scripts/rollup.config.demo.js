import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import nodeResolve from "rollup-plugin-node-resolve";
//import minify from "rollup-plugin-babel-minify";

//const NODE_ENV = process.env.NODE_ENV || "development";
//const NODE_ENV = "production";
const NODE_ENV = "development";

console.log("rollup.config.demo", NODE_ENV);

export default {
  input: "./src/exports.js",
  output: {
    file: "./demoapp/node_modules/react-router-utilitybelt/index.js",
    format: "cjs"
  },
  external: ["react", "react-dom", "react-router-dom", "fsjsd-lgr"],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    resolve({
      browser: true,
      extensions: [".js", ".jsx", ".json"]
    }),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs({
      include: ["node_modules/**"],
      exclude: ["node_modules/process-es6/**"]
    })
  ]
};
