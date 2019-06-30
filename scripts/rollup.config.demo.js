import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import nodeResolve from "rollup-plugin-node-resolve";
//import minify from "rollup-plugin-babel-minify";

//const NODE_ENV = process.env.NODE_ENV || "development";
//const NODE_ENV = "production";
const NODE_ENV = "development";

console.log("rollup", NODE_ENV);

/*
    name: "ReactRouterUtilityBeltDemo"
    globals: {
      react: "React",
      "react-dom": "ReactDom"
    },

    resolve({
      dedupe: ["react", "react-dom"],
      extensions: [".js", ".jsx"]
    }),
    */
/*,
    globals: {
      react: "React",
      "react-dom": "ReactDom",
      DemoApp: "DemoApp"
    }
    nodeResolve({
      browser: true
    }),
    */

export default {
  input: "./demo/index.js",
  output: {
    file: "./demo/index-build.js",
    format: "es"
  },
  external: ["react", "react-dom", "react-router-dom"],
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
/*,
,
      presets: [
        ["@babel/preset-env", { modules: false }],
        "@babel/preset-react"
      ]


    minify(){
      include: ["node_modules/**", "src/**"],
      exclude: ["node_modules/process-es6/**"],
      namedExports: {
        "node_modules/react/index.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement"
        ],
        "node_modules/react-dom/index.js": ["render"]
      }
    }
    */
