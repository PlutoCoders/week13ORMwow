const dotenv = require('dotenv');
dotenv.config(`dotenv`);

const express = require('express');
const routes = require('./routes/api');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use( routes );

// Connecting the Seq Models to DB
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
}).catch(( error ) => {
  console.error('Unable to sync Sequelize models:', error);
});