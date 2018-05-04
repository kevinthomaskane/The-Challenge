const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const db = require("./models");

if (process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
};

app.use(cookieParser());
app.use(fileUpload());

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function() {
  var server = app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
