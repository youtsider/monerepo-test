import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts'

export default [
  {
    input: "lib/index.ts",
    output: {
      file: "dist/index.js",
      format: "cjs"
    },
    plugins: [
      typescript()
    ]
  },
  {
    input: "lib/index.ts",
    output: {
      file: "dist/index.mjs",
      format: "es" //这里的es指的就是将源码编译成esmodule规范的文件
    },
    plugins: [
      typescript(),
    ]
  },
  {
    input: "./lib/index.ts",
    output: {
      file: "dist/index.d.ts",
    },
    plugins: [
      dts()
    ],
  }
]