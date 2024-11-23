import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@shared": path.resolve(__dirname, "src/lib/shared"),
      "@auth": path.resolve(__dirname, "src/lib/auth"),
      "@dash": path.resolve(__dirname, "src/lib/dash"),
      "@transactions": path.resolve(__dirname, "src/lib/transactions"),
    },
  },
});
