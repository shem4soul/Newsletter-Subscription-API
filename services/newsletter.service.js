const Newsletter = require("../models/newsletter.model");
const mailer = require("../utils/mailer");

class NewsletterService {
  async subscribe(email) {
    const existing = await Newsletter.findOne({ email });

    if (existing) {
      return { status: "exists", data: existing };
    }

    const user = await Newsletter.create({ email });

    // 📧 SEND WELCOME EMAIL
    await mailer.sendMail({
      to: email,
      subject: "Welcome to KNN Newsletter 🎉",
      html: `
        <h2>Welcome 🎉</h2>
        <p>You have successfully subscribed to our newsletter.</p>
        <p>We will send you updates and news.</p>
      `,
    });

    return { status: "subscribed", data: user };
  }
}

module.exports = new NewsletterService();
