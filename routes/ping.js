const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("GET request /api/ping");

  try {
    res.status(200).send({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "An unexpreced error occured" });
  }
});

module.exports = router;