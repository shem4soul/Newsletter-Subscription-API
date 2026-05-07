const Joi = require("joi");

const subscribeSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email",
    "any.required": "Email is required",
  }),
});

module.exports = { subscribeSchema };
