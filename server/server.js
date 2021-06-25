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
const path = require("path");

// template engine
const handlebars = require("express-handlebars");

app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "\\view"));

const server = app.listen(8000, () => {
  console.log("Server listening on port 8000");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'about.html'))
})

const io = require("socket.io")(server);
const jwt = require("jwt-then");

// const Message = mongoose.model("Message");
const User = mongoose.model("User");
const Weather = mongoose.model("Weather");

// verify token user, if === -> socket ready to connect
io.use(async (socket, next) => {
  try {
    // handshake sever
    const token = socket.handshake.query.token;

    // verify 
    const payload = await jwt.verify(token, process.env.SECRET);
    
    // save socket userID
    socket.userId = payload.id;

    // next
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
    console.log("A user want to get all city weather: " + socket.userId);
    // wether
    const data = await Weather.find({});

    socket.emit("newAllWeathers", {
      data,
      userId: socket.userId,
    });
  });

  socket.on("getCityWeather", async (weatherName) => {
    console.log(`A user want to get ${weatherName} weather: ` + socket.userId);

    //get city weather
    const data = await Weather.findOne(
      { cityName: new RegExp("^" + weatherName + "$", "i") },
      function (err, doc) {
        return err;
      }
    );

    socket.emit("newCityWeather", {
      data,
      userId: socket.userId,
    });
  });

  socket.on("createCityWeather", async (weather) => {
    console.log(`A user create new city weather `);

    // wether
    const data = await Weather.find({});

    socket.emit("updateCityWeather", {
      data,
      userId: socket.userId,
    });
  });

  socket.on("updateCityWeather", async (weather) => {
    console.log(`A user update new city weather `);

    // wether
    const data = await Weather.find({});

    io.sockets.emit("listenCityWeather", {
      data,
      userId: socket.userId,
    });
  });
});
