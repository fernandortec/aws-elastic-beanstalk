import 'dotenv/config';
import express from 'express';
import { router } from './router';

const app = express();

app.use(express.json());
app.get('/', (request, response) => response.json({ message: 'Hello world' }));
app.use(router);

export { app };
