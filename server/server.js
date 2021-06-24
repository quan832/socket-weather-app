require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

//Bring in the models
require("./models/User");
// require("./models/Chatroom");
// require("./models/Message");
require("./models/Weather");

const app = require("./app");

const server = app.listen(8000, () => {
  console.log("Server listening on port 8000");
});

const io = require("socket.io")(server);
const jwt = require("jwt-then");
const { default: axios } = require("axios");

// const Message = mongoose.model("Message");
const User = mongoose.model("User");
const Weather = mongoose.model("Weather");

io.use(async (socket, next) => {
  try {
    const token = socket.handshake.query.token;
    const payload = await jwt.verify(token, process.env.SECRET);
    socket.userId = payload.id;
    next();
  } catch (err) {
    console.log(err);
  }
});

io.on("connection", (socket) => {
  console.log("Connected: " + socket.userId);

  socket.on("disconnect", () => {
    console.log("Disconnected: " + socket.userId);
  });

  socket.on("getAllWeather", async ({ token }) => {
    console.log("A user want to get weather: " + socket.userId);
    // wether
    const data = await Weather.find({});

    socket.emit("newAllWeathers", {
      data,
      userId: socket.userId,
    });
  });

  socket.on("getCityWeather", async ( weatherName )=>{

    console.log(`A user want to get ${weatherName} weather: ` + socket.userId);

    //get city weather 
    const data = await Weather.findOne({cityName: new RegExp('^'+weatherName+'$', "i")}, function(err, doc){
       return err
    });

    
    socket.emit("newCityWeather", {
      data,
      userId: socket.userId,
    });
  })

});
