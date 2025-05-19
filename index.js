const express=require('express');
const dotenv=require('dotenv');
const dataB=require('./config/dataB');
const notifroutes=require('./routes/notifroutes');



dotenv.config();
dataB();

const app=express();
app.use(express.json());
app.use('/api',notifroutes);
app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);