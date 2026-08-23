import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/**/*.ts', 'src/**/*.vue'],
      outDir: 'dist',
      tsconfigPath: './tsconfig.app.json',
      rollupTypes: true,
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true,
        rootDir: 'src',
      },
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'VueComponentLib',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
