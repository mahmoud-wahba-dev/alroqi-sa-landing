import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import 'dotenv/config';
import { createApp } from './server/app.js';
import { createMailer } from './server/mailer.js';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'inquiry-api',
      configureServer(server) {
        server.middlewares.use(createApp({ mailer: createMailer() }));
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
