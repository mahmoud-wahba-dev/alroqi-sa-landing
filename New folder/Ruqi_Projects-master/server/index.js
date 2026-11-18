import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createApp } from './app.js';
import { createMailer } from './mailer.js';

const port = Number(process.env.PORT || 3001);
const mailer = createMailer();

const app = createApp({ mailer });
const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distPath = path.join(projectRoot, 'dist');

app.use(express.static(distPath));
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api/')) return next();
  return res.sendFile(path.join(distPath, 'index.html'), (error) => {
    if (error) next(error);
  });
});

app.listen(port, () => {
  console.info(`[Inquiry API] Listening on port ${port}.`);
  if (!mailer) console.warn('[Inquiry API] SMTP is not configured; inquiry submissions will be rejected.');
});
