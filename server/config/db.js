const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
// const db_URI = ``;

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    useNewUrlParser :true 
  };
  
  mongoose.connect(process.env.DB_URI, options).then(
    () => {
      console.log("Database connection established!");
    },
    err => {
      console.log("Error connecting Database instance due to: ", err);
    }
  );