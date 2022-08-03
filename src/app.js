import express from 'express';
import config from './config.js';
import cors from 'cors';
import AnimalRoutes from './routes/animals.routes.js'

const app = express();

app.set('port', config.PORT);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(AnimalRoutes);

export default app;