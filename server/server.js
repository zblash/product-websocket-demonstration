var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

const cors = require("cors");

let products = [];

app.use(cors());

app.get("/products", function (req, res, next) {
  res.json(products);
});

io.on("connection", function (socket) {
  socket.on("event://send-message", function (msg) {
    console.log("got", msg);

    const payload = JSON.parse(msg);
    products.push(payload.product);

    socket.broadcast.emit("event://get-message", msg);
  });
});

http.listen(5000, function () {
  console.log("listening on *:5000");
});
