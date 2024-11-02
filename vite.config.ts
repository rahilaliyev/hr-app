import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    svgr({
      svgrOptions: {
        exportType: 'named',
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
