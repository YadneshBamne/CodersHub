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
    // Exclude PDFKit so that Vite doesn't try to pre-bundle it
    exclude: ["pdfkit"],
  },
  esbuild: {
    target: "es2018", // or "esnext", if that works better for your code
  },
  build: {
    minify: false, // disable minification for now to narrow down the issue
    rollupOptions: {
      // Treat PDFKit and any of its subpaths as external so it isn't bundled
      external: ['pdfkit', /^pdfkit(\/.*)?$/],
    },
    commonjsOptions: {
      // This helps when dependencies mix ESM and CommonJS
      transformMixedEsModules: true,
    },
  },
});
