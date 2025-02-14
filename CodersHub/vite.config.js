// import path from "path"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })

import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["pdfkit"],
  },
  esbuild: {
    target: "es2018", // Adjust as needed (e.g., "esnext")
  },
  build: {
    minify: false, // Disable minification temporarily
    rollupOptions: {
      external: ["pdfkit"],
    },
  },
});
