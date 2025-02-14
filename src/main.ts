import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify

import "@mdi/font/css/materialdesignicons.css";
import { registerPlugins } from "./plugins";

const app = createApp(App);
registerPlugins(app);

app.config.errorHandler = (err, vm, info) => {
  console.error(err);
  router.push({ name: "ErrorDestination" });
};
app.mount("#app");

window.document.title = "ACDC Holder";
