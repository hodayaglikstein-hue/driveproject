var express = require("express");
var path = require("path");
var router = express.Router();
var fs = require("fs/promises");

router.post("/", async (req, res) => {
  try {
    const userPath = path.join(
      __dirname,
      `../users/${req.body.path}`,
      `${req.body.fileName}`
    );
    console.log(userPath);
    await fs.writeFile(userPath + ".txt", "blabla");
    res.json({ messeage: "The file has been created" });
  } catch (err) {
    res.status(500).json({ error: "File creation failed." });
  }
});

module.exports = router;
