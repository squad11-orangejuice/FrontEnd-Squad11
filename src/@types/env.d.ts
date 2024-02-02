/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_CLIENT_ID: string
  readonly VITE_URL_GOOGLE_AUTH: string
  readonly VITE_URL_BACKEND_ORANGE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
