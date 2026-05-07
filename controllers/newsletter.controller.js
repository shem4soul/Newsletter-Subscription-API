const service = require("../services/newsletter.service");

exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await service.subscribe(email);

    if (result.status === "exists") {
      return res.status(200).json({
        success: true,
        message: "You are already subscribed to our newsletter.",
        data: result.data,
      });
    }

    return res.status(201).json({
      success: true,
      message:
        "You have successfully subscribed to our newsletter. You will now receive updates in your inbox.",
      data: result.data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
