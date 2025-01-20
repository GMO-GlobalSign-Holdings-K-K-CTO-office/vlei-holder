/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_KERIA_ADMIN_INTERFACE_URL: string;
  readonly VITE_KERIA_BOOT_INTERFACE_URL: string;
  readonly VITE_WITNESS_URLS: string;
  readonly VITE_VLEI_SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
