const router = require("express").Router();

const controller = require("../controllers/support.controller");

const validate = require("../middlewares/validate");

const { inquirySchema } = require("../validators/support.validator");

/**
 * @swagger
 * /support/inquiry:
 *   post:
 *     summary: Submit support inquiry
 *     tags: [Support]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Emmanuel
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               message:
 *                 type: string
 *                 example: I need support assistance
 *     responses:
 *       201:
 *         description: Inquiry submitted successfully
 */
router.post("/inquiry", validate(inquirySchema), controller.createInquiry);

module.exports = router;
