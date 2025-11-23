var express = require("express");
const path = require("path");
const fs = require("fs");

var router = express.Router();
const usersPath = path.join(__dirname, "../users", "data.json");

router.post("/", (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.send("please enter username and password");
    return;
  }
  fs.readFile(usersPath, "utf-8", (err, data) => {
    if (err) {
      res.send("something went wrong");
      return;
    }
    try {
      const usersData = JSON.parse(data);
      const user = findUser(usersData, req.body.username);
      if (user) {
        if (user.password === JSON.parse(req.body.password)) {
          res.send("Logging in!");
        } else {
          res.send("something is wrong");
        }
      } else {
        res.send("user isn't exist");
      }
    } catch (e) {
      console.error(e);
    }
  });
});

function findUser(data, username) {
  return data.find((user) => user.username === username);
}

module.exports = router;
