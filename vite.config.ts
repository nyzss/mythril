import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [react()],
  // tauri stuff
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  preview: {
    port: 8080,
    strictPort: true,
    host: true,
    // origin: "http://0.0.0.0:8080",
  },

  server: {
    host: true,
    port: 8080,
    // origin: "http://0.0.0.0:8080",
    strictPort: true,
  },
  // 3. to make use of `TAURI_DEBUG` and other env variables
  envPrefix: ["VITE_", "TAURI_"],
}));
