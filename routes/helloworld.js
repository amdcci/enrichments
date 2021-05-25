var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
  res.send('Hello world');
});

router.post("/", (req, res) => {
  let body = req.body;
  if (body) {
    res.send('Request body: ' + body);
  }
  else {
    res.sendStatus(204);
  }
});

module.exports = router;