import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import svgr from '@svgr/rollup'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      interop: 'compat',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      interop: 'compat',
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    svgr(),
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: true,
      declaration: true,
      declarationDir: './dist/types',
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'bundled',
    }),
    terser({
      compress: {
        drop_console: true,
        passes: 3, // 압축을 3번 반복
        pure_funcs: ['console.log'], // console.log 함수 제거
      },
      mangle: {
        toplevel: true, // 최상위 변수 및 함수 이름도 압축
      },
    }),
  ],
}
