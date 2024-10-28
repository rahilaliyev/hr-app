import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint2';

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    svgr({
      svgrOptions: {
        exportType: 'named',
        icon: true
      }
    })
  ],
  resolve: {
    alias: {
      src: '/src'
    }
  }
});
