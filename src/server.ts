import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import config from './config/server';

const app = express();
const port = config.server.port;
const message = config.server.message;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(message));