var express = require("express");
var path = require("path");
var router = express.Router();
var fs = require("fs/promises");

router.get("/:folderName", async (req, res) => {
  try {
    const folderPath = path.join(__dirname, "../users", req.params.folderName);
    const files = await fs.readdir(folderPath);
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: "Error getting files" });
  }
});

router.post("/", async (req, res) => {
  try {
    const userPath = path.join(__dirname, "../users", `${req.body.username}`);
    console.log(userPath);
    await fs.mkdir(userPath);
    res.json({ messeage: "The file has been created" });
  } catch (err) {
    console.log("one");
    res.status(500).json({ error: "File creation failed." });
  }
});

router.delete("/:name", async (req, res) => {
  try {
    const userPath = path.join(__dirname, "../users", `${req.params.name}`);
    console.log(userPath);
    await fs.rmdir(userPath);
    res.json({ messeage: "The file was successfully deleted." });
  } catch (err) {
    console.log("two");
    res.status(500).json({ error: "Error deleting file" });
  }
});

module.exports = router;
