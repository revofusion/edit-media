import { PluginOption, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import fs from 'node:fs/promises'
import path from 'node:path'
import url from 'node:url'
import { createRequire } from 'node:module'
import mkcert from 'vite-plugin-mkcert'

const resolveDir = (location: string) => path.resolve(__dirname, location)

const WRONG_CODE = `import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";`

function reactVirtualized(): PluginOption {
  return {
    name: 'flat:react-virtualized',
    // Note: we cannot use the `transform` hook here
    //       because libraries are pre-bundled in vite directly,
    //       plugins aren't able to hack that step currently.
    //       so instead we manually edit the file in node_modules.
    //       all we need is to find the timing before pre-bundling.
    configResolved: async () => {
      const require = createRequire(import.meta.url)
      const reactVirtualizedPath = require.resolve('react-virtualized')
      const { pathname: reactVirtualizedFilePath } = new url.URL(reactVirtualizedPath, import.meta.url)
      const file = reactVirtualizedFilePath
        .replace(
          path.join('dist', 'commonjs', 'index.js'),
          path.join('dist', 'es', 'WindowScroller', 'utils', 'onScroll.js'),
        )
      const code = await fs.readFile(file, 'utf-8')
      const modified = code.replace(WRONG_CODE, '')
      await fs.writeFile(file, modified)
    },
  }
}

export default defineConfig(async () => ({
  plugins: [
    react(),
    sentryVitePlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: "edit-media",
      project: "javascript-react",
      telemetry: false
    }),
    reactVirtualized(),
    mkcert()
  ],
  optimizeDeps: {
    exclude: ["@ffmpeg/ffmpeg", "@ffmpeg/util", "@browserfs/core", "@browserfs/fs-dom"],
  },
  resolve: {
    alias: {
      '@os': resolveDir(process.env.VITE_BUILD_TARGET === 'web' ? './src/class/web' : './src/class/desktop'),
      '@helpers': resolveDir('./src/helpers'),
      '@formatters': resolveDir('./src/formatters'),
      '@components': resolveDir('./src/components'),
      '@class': resolveDir('./src/class'),
      '@stores': resolveDir('./src/stores'),
      '@assets': resolveDir('./src/assets'),
    }
  },
  build: {
    sourcemap: true, // Source map generation must be turned on
  },
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 8080,
    https: process.env.VITE_BUILD_TARGET === 'web',
    strictPort: true,
    host: '127.0.0.1',
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
  // 3. to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.app/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ["VITE_", "TAURI_"],
}));
