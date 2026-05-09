const Joi = require("joi");

const inquirySchema = Joi.object({
  name: Joi.string().required(),

  email: Joi.string().email().required(),

  message: Joi.string().required(),
});

module.exports = {
  inquirySchema,
};
