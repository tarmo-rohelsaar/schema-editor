import { solidStart } from "@solidjs/start/config";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    devtools(),
    tanstackRouter({
      target: "solid",
      autoCodeSplitting: true,
    }),
    solidStart(),
    nitro(),
  ],
});
