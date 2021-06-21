const mongoose = require("mongoose");
const Weather = mongoose.model("Weather");

exports.createCityWeather = async (req, res) => {
  const { cityName, avrTemperature, typeIcon, data } = req.body;

  const cityNameRegex = /^[A-Za-z\s]+$/;

  if (!cityNameRegex.test(cityName))
    throw "City name can contain only alphabets.";

  const weatherExist = await Weather.findOne({ cityName });

  if (weatherExist) throw "Weather with that name already exists!";

  const weatherCity = new Weather({
    cityName,
    avrTemperature,
    typeIcon,
    data,
  });

  await weatherCity.save();

  res.json({
    message: "Weather created!",
  });

  // xu ly weather trong nay
};

exports.getAllWeather = async (req, res) => {
  // wether
  const weathers = await Weather.find({});

  res.json(weathers);
};
