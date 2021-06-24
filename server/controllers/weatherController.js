const mongoose = require("mongoose");
const Weather = mongoose.model("Weather");

exports.createCityWeather = async (req, res) => {
  const {
    cityName,
    avrTemperature,
    typeIcon,
    highTemperature,
    lowTemperature,
    content,
    data,
  } = req.body;

  const cityNameRegex = /^[A-Za-z\s]+$/;

  if (!cityNameRegex.test(cityName))
    throw "City name can contain only alphabets.";

  const weatherExist = await Weather.findOne({ cityName });

  if (weatherExist) throw "Weather with that name already exists!";

  const weatherCity = new Weather({
    cityName,
    avrTemperature,
    highTemperature,
    lowTemperature,
    typeIcon,
    content,
    data,
  });

  await weatherCity.save();

  res.json({
    message: "Weather created!",
  });

  // xu ly weather trong nay
};

exports.updateYourCityWeather = async (req, res) => {
  const weathers = await Weather.findById(req.params.id);

  const {
    cityName,
    avrTemperature,
    typeIcon,
    highTemperature,
    lowTemperature,
    content,
    data,
  } = req.body;

  Weather.findByIdAndUpdate(
    req.params.id,
    {
      cityName,
      avrTemperature,
      typeIcon,
      highTemperature,
      lowTemperature,
      content,
      data,
    },
    { new: true, useFindAndModify: false}
  )
    .then((id) => {
      if (!id) {
        return res.status(404).send({
          message: "Update not found with id " + req.params.id,
        });
      }
      res.send(id);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error updating note with id " + req.params.id,
      });
    });
};

exports.getAllWeather = async (req, res) => {
  // wether
  const weathers = await Weather.find({});

  res.json(weathers);
};

exports.getYourCityWeather = async (req, res) => {
  const weathers = await Weather.findById(req.params.id);

  res.json(weathers);
};
