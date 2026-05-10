const service = require("../services/newsletter.service");

exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await service.subscribe(email);

    // 🔴 Already exists
    if (result.status === "exists") {
      return res.status(200).json({
        success: true,
        message:
          "This email is already subscribed to our newsletter. Stay tuned for upcoming updates and news.",
        data: result.data,
      });
    }

    // 🟢 New subscription
    if (result.status === "subscribed") {
      return res.status(201).json({
        success: true,
        message:
          "Greetings to you from KDN Group Team, Thank you for subscribing. You will now receive timely updates, important announcements, and curated content directly in your inbox..",
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

exports.unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await service.unsubscribe(email);

    if (result.status === "not_found") {
      return res.status(404).json({
        success: false,
        message: "Email not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "You have successfully unsubscribed from our newsletter. You will no longer receive email updates from us..",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
