const { Sequelize, DatabaseError } = require("sequelize");
//const sequelize = require('sequelize');
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
//models login
//drop Database
//make backend login work first then frontend
//then put in routes

//api routes handle data
//outside api handlebars
//js files front end functionality