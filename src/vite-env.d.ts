/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MY_VAR_FOR_ALL_ENVS: string;
  readonly VITE_MY_VAR_ENV: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
