//Index routes
const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");

//Route to the controllers
// router.post("/create-checkout-session", indexController.memoryPayment);

router.post("/checkout", indexController.memoryPayment);
module.exports = router;
