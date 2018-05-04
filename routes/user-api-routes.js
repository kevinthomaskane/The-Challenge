
const db = require("../models");

module.exports = function(app){

  app.post("/api/newUser", (req, res) => {
    req.body.token = "t" + Math.random();
    db.User.create(req.body).then((data) => {
      res.cookie("token", req.body.token, {maxAge: 999999999});
      res.json(data)
    }).catch((error) => {
      console.log(error);
    });
  });

};