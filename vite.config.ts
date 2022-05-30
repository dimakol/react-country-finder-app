import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // when needing to go into dev mode, comment base
  base: "/country-finder/",
  plugins: [react()],
});
