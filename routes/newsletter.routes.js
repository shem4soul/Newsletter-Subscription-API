const router = require("express").Router();

const controller = require("../controllers/newsletter.controller");
const validate = require("../middlewares/validate");

const { subscribeSchema } = require("../validators/newsletter.validator");

/**
 * @swagger
 * /newsletter/subscribe:
 *   post:
 *     summary: Subscribe to newsletter
 *     tags: [Newsletter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *     responses:
 *       201:
 *         description: Successfully subscribed
 */
router.post("/subscribe", validate(subscribeSchema), controller.subscribe);

/**
 * @swagger
 * /newsletter/unsubscribe:
 *   delete:
 *     summary: Unsubscribe from newsletter
 *     tags: [Newsletter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *     responses:
 *       200:
 *         description: Successfully unsubscribed
 */
router.delete(
  "/unsubscribe",
  validate(subscribeSchema),
  controller.unsubscribe,
);

module.exports = router;
