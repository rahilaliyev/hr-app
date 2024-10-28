import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "named",
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
