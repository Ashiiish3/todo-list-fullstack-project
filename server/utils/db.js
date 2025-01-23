const mongoose = require("mongoose");

const connectMongoDB = mongoose.connect(
  "mongodb://127.0.0.1:27017/todolistFullstackProject"
);

module.exports = connectMongoDB;
