const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const router = express.Router();
const blockchain = require("./blockchain-type");

router.use("/blockchain/txn/type", blockchain.router);

exports.router = router;
