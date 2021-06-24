export const initialState = {
  userState: {},
  weatherState: {
    cityWeather: {
      avrTemperature: 37,
      highTemperature: 40,
      lowTemperature: 32,
      feelTemperature: 35,
      rainChance: 10,
      windSpeed: 20,
      cityName: "Sài Gòn",
      typeIcon: "sunny",
      dateTime: "2021-06-21 15:20:33.457Z",
    },
    weathers: {},
    isFetching: false,
    isUpload: false,
    isSelect: true,
  },
};
