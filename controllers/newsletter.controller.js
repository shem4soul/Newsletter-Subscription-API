const service = require("../services/newsletter.service");

exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await service.subscribe(email);

    // 🔴 Already exists
    if (result.status === "exists") {
      return res.status(200).json({
        success: true,
        message: "You are already subscribed to our newsletter.",
        data: result.data,
      });
    }

    // 🟢 New subscription
    if (result.status === "subscribed") {
      return res.status(201).json({
        success: true,
        message:
          "Season Greetings to you from KDNGroup LLC Team, You have successfully subscribed to our newsletter. You will now receive updates in your inbox.",
        data: result.data,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
