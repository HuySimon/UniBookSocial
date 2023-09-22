const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const db = require("./models");

try {
  db.sequelize.sync()
  console.log("Synced db.");
} catch (err) {
  console.log("Failed to sync db: " + err.message);
}
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});