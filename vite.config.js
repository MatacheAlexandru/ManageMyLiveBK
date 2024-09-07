import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Setăm baza în funcție de mediul de rulare
export default defineConfig(({ mode }) => {
  return {
    base: mode === "production" ? "/ManageMyLiveBK/" : "/", // Folosim baza doar în producție
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
