const Newsletter = require("../models/newsletter.model");
const mailer = require("../utils/mailer");

class NewsletterService {
  async subscribe(email) {
    const existing = await Newsletter.findOne({ email });

    if (existing) {
      return {
        status: "exists",
        message:
          "This email is already subscribed to our newsletter. Stay tuned for upcoming updates and news.",
        data: existing,
      };
    }

    const user = await Newsletter.create({ email });

    // 📧 Welcome Email
    await mailer.sendMail({
      to: email,
      subject: "Welcome to KNN Newsletter 🎉",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Welcome 🎉</h2>
          <p>
            You have successfully subscribed to our newsletter.
          </p>
          <p>
            Stay connected for the latest updates, news, and insights delivered directly to your inbox.
          </p>
          <br/>
          <p>Thank you for joining us.</p>
        </div>
      `,
    });

    return {
      status: "subscribed",
      message:
        "You have successfully subscribed to our newsletter. Stay connected for the latest updates, news, and insights delivered directly to your inbox.",
      data: user,
    };
  }

  async unsubscribe(email) {
    const user = await Newsletter.findOne({ email });

    if (!user) {
      return {
        status: "not_found",
        message: "This email address was not found in our newsletter list.",
      };
    }

    await Newsletter.deleteOne({ email });

    return {
      status: "unsubscribed",
      message:
        "You have successfully unsubscribed from our newsletter. You will no longer receive email updates from us.",
    };
  }
}

module.exports = new NewsletterService();
