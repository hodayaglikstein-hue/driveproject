var express = require("express");
const path = require("path");
const fs = require("fs");

var router = express.Router();
const usersPath = path.join(__dirname, "../users", "data.json");

router.post("/", (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res
      .status(401)
      .send({ error: "Please enter username and password" });
  }
  fs.readFile(usersPath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Something went wrong");
    }
    try {
      const usersData = JSON.parse(data);
      const user = findUser(usersData, req.body.username);
      if (user) {
        if (user.password === req.body.password) {
          return res.status(200).send("Logging in!");
        } else {
          return res.status(401).send("Something is wrong");
        }
      } else {
        return res.status(404).send("User isn't exist");
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
