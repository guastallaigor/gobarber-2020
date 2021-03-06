import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import i18nextMiddleware from 'i18next-http-middleware';
import Backend from 'i18next-node-fs-backend';
import i18next from 'i18next';

import routes from './routes';
import './database';
import uploadConfig from './config/upload-config';
import generalException from './middlewares/generalException';

const app = express();

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: `${__dirname}/resources/locales/{{lng}}/{{ns}}.json`,
    },
    fallbackLng: 'en',
    preload: ['pt-BR', 'en'],
  });

app.use(bodyParser.json());

app.use('/files', express.static(uploadConfig.directory));

app.use(i18nextMiddleware.handle(i18next));
app.use(routes);

app.use(generalException);

app.listen(
  3333,
  () => console.log('🚀 Server Started on port 3333'), // eslint-disable-line no-console
);
