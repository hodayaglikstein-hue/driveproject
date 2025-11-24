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
    await fs.writeFile(userPath + ".txt", req.body.textValue);
    res.json({ messeage: "The file has been created" });
  } catch (err) {
    res.status(500).json({ error: "File creation failed." });
  }
});

router.get("/*", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../users", req.params[0]);
    console.log(filePath);
    const content = await fs.readFile(filePath, "utf8");
    res.json({ text: content });
  } catch (err) {
    res.status(500).json({ error: "Error getting files" });
  }
});

module.exports = router;
