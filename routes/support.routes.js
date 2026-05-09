const router = require("express").Router();

const controller = require("../controllers/support.controller");
const validate = require("../middlewares/validate");

const { inquirySchema } = require("../validators/support.validator");

router.post("/inquiry", validate(inquirySchema), controller.createInquiry);

module.exports = router;
