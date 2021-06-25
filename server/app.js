const express = require("express");
const path = require('path')

const app = express();

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setup Cross Origin
app.use(require("cors")());

//Bring in the routes
app.use("/user", require("./routes/user"));
// app.use("/chatroom", require("./routes/chatroom"));
app.use("/weather",require("./routes/weather"));

app.get('/', (req, res) => { // called when request to /about comes in
  res.sendFile(path.resolve(__dirname, './public/index.html'))
})

//Setup Error Handlers
const errorHandlers = require("./handlers/errorHandlers");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

module.exports = app;
