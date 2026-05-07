const router = require("express").Router();

const controller = require("../controllers/newsletter.controller");
const validate = require("../middlewares/validate");
const { subscribeSchema } = require("../validators/newsletter.validator");

router.post("/subscribe", validate(subscribeSchema), controller.subscribe);

module.exports = router;
