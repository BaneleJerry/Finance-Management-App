const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load environment variables from .env file
const env = process.env.NODE_ENV || "development";

// Fetch database configuration from environment variables or config file
const dbConfig = {
  database:
    process.env.DB_DATABASE || require("./config/config.json")[env].database,
  username:
    process.env.DB_USERNAME || require("./config/config.json")[env].username,
  password:
    process.env.DB_PASSWORD || require("./config/config.json")[env].password,
  host: process.env.DB_HOST || require("./config/config.json")[env].host,
  dialect:
    process.env.DB_DIALECT || require("./config/config.json")[env].dialect,
};

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
