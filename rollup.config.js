import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import multi from '@rollup/plugin-multi-entry';
import multiInput from 'rollup-plugin-multi-input';

export default {
  input: ['src/**/*.tsx'],
  output: {
    format: 'es',
    dir: './'
  },
  /*output: [
    {
      dir: 'esm',
      format: 'esm',
      named: true,
      sourcemap: true,
    },
  ],*/

  /*output: [
    {
      file: "dist/index.js",
      format: "es"
    }
  ],*/
  external: ["solid-js", "solid-js/web"],
  plugins: [
    nodeResolve({
      extensions: [".js", ".ts", ".tsx"]
    }),
    multiInput(),
    babel({
      babelrc: false,
      extensions: [".js", ".ts", ".tsx"],
      babelHelpers: "bundled",
      presets: ["solid", "@babel/preset-typescript"],
      exclude: "node_modules/**"
    })
  ]
};
