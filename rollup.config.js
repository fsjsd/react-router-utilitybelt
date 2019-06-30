import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import reactSvg from "rollup-plugin-react-svg";
import sass from "rollup-plugin-sass";

const NODE_ENV = process.env.NODE_ENV || "development";

let inputFile = "";
let outputFile = "";

switch (NODE_ENV) {
  case "demo":
    inputFile = "./demo/index.js";
    outputFile = "./demoapp/lib/react-router-utilitybelt.js";
    break;
  case "development":
    inputFile = "./src/exports.js";
    outputFile = "./lib/dev.js";
    break;
  case "production":
    inputFile = "./src/exports.js";
    outputFile = "./lib/prod.js";
    break;
}

export default {
  input: inputFile,
  output: {
    file: outputFile,
    format: "umd"
  },
  external: ["react", "react-dom", "react-router-dom", "fsjsd-lgr"],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve({ extensions: [".jsx", ".js"] }),
    commonjs(),
    reactSvg(),
    sass()
  ],
  external: id => /^react/.test(id)
};
