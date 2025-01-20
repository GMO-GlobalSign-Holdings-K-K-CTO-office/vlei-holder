import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const lightTheme = {
  dark: false,
  colors: {
    // ブライトトーン
    primary: "#00ADA9",
    // ライトトーン
    secondary: "#F9C270",
    // ソフトトーン
    accent: "#5D5099",
  },
};

const darkTheme = {
  dark: false,
  colors: {
    // ダークトーン
    primary: "#0075A9",
    // ディープトーン
    secondary: "#D28300",
    // ダルトーン
    accent: "#903E84",
  },
};

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: `${import.meta.env.VITE_VUETIFY_THEME ?? "lightTheme"}`,
    variations: {
      colors: ["primary", "secondary", "accent"],
      lighten: 2,
      darken: 2,
    },
    themes: {
      lightTheme,
      darkTheme,
    },
  },
});
