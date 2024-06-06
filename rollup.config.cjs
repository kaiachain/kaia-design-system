const babel = require("@rollup/plugin-babel").default;
const typescript = require("@rollup/plugin-typescript");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const svgr = require("@svgr/rollup");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
      sourcemapPathTransform: (relativePath) => {
        // 경로를 재설정하여 실제 파일 위치와 일치시키기
        return relativePath.replace(/^(\.\.\/)+/, "");
      },
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
      sourcemapPathTransform: (relativePath) => {
        return relativePath.replace(/^(\.\.\/)+/, "");
      },
    },
  ],
  external: ["react", "react-dom", "styled-components"],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      sourceMap: true,
    }),
    babel({
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      babelHelpers: "bundled",
      sourceMaps: true,
    }),
    svgr(),
  ],
};
