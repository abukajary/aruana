import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    fs: {
      strict: false, // Разрешает доступ к файлам за пределами корневой директории
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Отключает разбиение чанков (может помочь)
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src", // Удобный алиас для импорта
    },
  },
});
