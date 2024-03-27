
const express = require('express');
// const bodyParser = require('body-parser');
const averageRouter = require('./Routers/averageRouter');
const mongoose=require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
require('dotenv').config({path:"./config.env"});
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
const dbConnectionString="mongodb://127.0.0.1:27017/Average_Calculator";

mongoose
  .connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });


  app.use('/numbers', averageRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
