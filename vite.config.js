import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-react-components/vite'
// import { AntdResolver, MuiResolver } from 'unplugin-react-components'
import vitePluginImp from 'vite-plugin-imp'
const srcPath = path.resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [{
        libName: "antd",
        style: (name) => `antd/es/${name}/style`,
      }]
    }),
    AutoImport({
      imports: ["react"], // 自动导入 react 相关函数，如：useRef, useState 等
      // resolvers: [AntdResolver()],
      dts: path.resolve(srcPath, "types", "auto-imports.d.ts"), // 指定自动导入函数TS类型声明文件路径
    }),
    Components({
      dts: true,
      // resolvers: [
      //   AntdResolver(),
      //   MuiResolver()
      // ],
      // resolvers: [AntdResolver()],
      // dts: path.resolve(srcPath, "types", "components.d.ts"), // 指定自动导入组件TS类型声明文件路径
    })
  ],
  resolve: {
    alias: { '@': srcPath }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,// 支持内联 JavaScript
        modifyVars: {
          '@primary-color': '#4377FE',//设置antd主题色
        },
      },
    }
  }
})










