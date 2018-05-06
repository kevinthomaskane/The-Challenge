
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

  app.post("/api/login", (req,res) => {
    db.User.update(
      {token: req.body.token},
    {where: {
        username: req.body.username,
        password: req.body.password
      }
    }).then((data) => {
        res.cookie("token", req.body.token,{maxAge: 999999999});
        db.User.findOne({
          where: {
            username: req.body.username
          }
        }).then((data) => {
          console.log("found a user");
          res.json(data);
        }).catch((error) => {
          res.send("login or password incorrect");
        })
      })
    });
    
};