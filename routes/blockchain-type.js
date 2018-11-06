const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const jsonParser = bodyParser.json();
const axios = require("axios");

exports.router = router;

// router.post("/0", jsonParser, (req, res) => {
//   console.log(req.body);
//   axios.get("http://www.mocky.io/v2/5bcd74522f00004c00c8533f").then((result) => {
//     res.status(200).json(result);
//   }).catch((err) => {
//     res.status(400).json({ err: err.message });
//   });
// });

// router.post("/1", jsonParser, (req, res) => {
//   console.log(req.body);
//   axios.get("http://www.mocky.io/v2/5bcd74522f00004c00c8533f").then((result) => {
//     res.status(200).json(result);
//   }).catch((err) => {
//     res.status(400).json({ err: err.message });
//   });
// });

router.post("/2", jsonParser, (req, res) => {
  console.log(req.body);
  axios.get("http://www.mocky.io/v2/5bcd74522f00004c00c8533f").then((result) => {
    res.status(200).json(result.data);
  }).catch((err) => {
    res.status(400).json({ err: err.message });
  });
});

router.post("/5", jsonParser, (req, res) => {
  console.log(req.body);
  axios.get("http://www.mocky.io/v2/5bcd74522f00004c00c8533f").then((result) => {
    res.status(200).json(result.data);
  }).catch((err) => {
    res.status(400).json({ err: err.message });
  });
});

router.post("/6", jsonParser, (req, res) => {
  console.log(req.body);
  axios.get("http://www.mocky.io/v2/5bcd74522f00004c00c8533f").then((result) => {
    res.status(200).json(result.data);
  }).catch((err) => {
    res.status(400).json({ err: err.message });
  });
});
