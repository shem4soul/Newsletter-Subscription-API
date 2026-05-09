const service = require("../services/support.service");

exports.createInquiry = async (req, res) => {
  try {
    const inquiry = await service.createInquiry(req.body);

    return res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully.",
      data: inquiry,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
