const mongoose = require("mongoose");

// mongoose Schema for comments
var weatherSchema = mongoose.Schema({
  cityName: {
    type: String,
    required: "Name is required!",
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
  avrTemperature: {
    type: Number,
    required: "avrTemperature is required!!",
  },
  typeIcon: {
    type: String,
  },
  data: [
    {
      dateNumber: { type: Date },
      rainFall: {
        type: Number,
      },
      wingSpeed: {
        type: Number,
      },
      highTemperature: {
        type: Number,
      },
      lowTemperature: {
        type: Number,
      },
      avrTemperature: {
        type: Number,
      },
    },
  ],
});

module.exports = mongoose.model("Weather", weatherSchema);
