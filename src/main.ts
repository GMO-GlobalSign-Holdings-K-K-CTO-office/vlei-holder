import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import { registerPlugins } from "./plugins";

// polyfill
import { Buffer } from "buffer";
window.Buffer = Buffer;

const app = createApp(App);
registerPlugins(app);

app.config.errorHandler = (err) => {
  console.error(err);

  // alert or redirect to error page
  alert("An error occurred. Please try again later.");
  // router.push({ name: "ErrorDestination" });
};
app.mount("#app");

window.document.title = "ACDC Holder";
