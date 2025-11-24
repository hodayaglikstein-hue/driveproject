var express = require("express");
var path = require("path");
var router = express.Router();
var fs = require("fs/promises");
const { error } = require("console");

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
    const userPath = path.join(
      __dirname,
      `../users/${req.body.path}`,
      `${req.body.folderName}`
    );
    console.log(userPath);
    await fs.mkdir(userPath);
    res.json({ messeage: "The file has been created" });
  } catch (err) {
    console.log("one");
    res.status(500).json({ error: "File creation failed." });
  }
});

router.delete("/:folderPath(*)", async (req, res) => {
  try {
    const userPath = path.join(
      __dirname,
      "../users",
      `${req.params.folderPath}`
    );
    console.log(`${req.params.path}`);
    console.log(userPath);
    await fs.rmdir(userPath);
    res.json({ messeage: "The file was successfully deleted." });
  } catch (err) {
    console.log("two");
    console.log("Error details:", err);
    res.status(500).json({ error: "Error deleting file" });
  }
});

module.exports = router;
