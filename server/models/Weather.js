const mongoose = require("mongoose");

// mongoose Schema for comments
var weatherSchema = mongoose.Schema({
  cityName: {
    type: String,
    required: "Name is required!",
  },
  dateTime: {
    type: Date,
  },
  rainFall: {
    type: Number,
    required: "rainFall is required!!",
  },
  avrTemperature: {
    type: Number,
    required: "avrTemperature is required!!",
  },
  highTemperature: {
    type: Number,
    required: "highTemperature is required!!",
  },
  lowTemperature: {
    type: Number,
    required: "lowTemperature is required!!",
  },
  typeIcon: {
    type: String,
  },
});

module.exports = mongoose.model("Weather", weatherSchema);
