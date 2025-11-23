var express = require("express");
const path = require("path");
const fs = require("fs");

var router = express.Router();
const usersPath = path.join(__dirname, "../users", "data.json");

router.post("/", (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(401).send("Please enter username and password");
  }
  fs.readFile(usersPath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Something went wrong");
    }
    try {
      const usersData = JSON.parse(data);
      const user = findUser(usersData, req.body.username);
      if (user) {
        return res.status(404).send("User already exsit");
      } else {
        const newUser = {
          username: req.body.username,
          password: req.body.username,
        };
        usersData.push(newUser);
        fs.writeFile(usersPath, JSON.stringify(usersData), (err) => {
          if (err) {
            return res.status(500).send("Something went wrong");
          } else {
            return res.status(200).send("Logging in!");
          }
        });
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
