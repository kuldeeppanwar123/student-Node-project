import express from 'express';
import 'dotenv/config'
import router from './src/routers/indexRouter.js';
import { configDB } from './src/config/configDB.js';

const app = express();

app.use(express.json());
app.use(router);

configDB();
app.listen(4100 ,()=>{
  console.log(`server is running at ${process.env.portNo}`);
})