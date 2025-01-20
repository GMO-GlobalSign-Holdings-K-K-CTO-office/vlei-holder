// Plugins
import { vuetify } from "./vuetify";
import pinia from "../stores";
import router from "../router";
import { loadFonts } from "./webfontloader";

// Types
import type { App } from "vue";

export function registerPlugins(app: App): App {
  loadFonts();
  app.use(vuetify).use(router).use(pinia);
  return app;
}
