const Newsletter = require("../models/newsletter.model");
const mailer = require("../utils/mailer");

class NewsletterService {
  async subscribe(email) {
    const normalizedEmail = email.toLowerCase().trim();

    const existing = await Newsletter.findOne({ email: normalizedEmail });

    if (existing) {
      return { status: "exists", data: existing };
    }

    const user = await Newsletter.create({
      email: normalizedEmail,
    });

    await mailer.sendMail({
      to: normalizedEmail,
      subject: "Welcome to KDNGroup LLC Team Newsletter 🎉",
      html: `
        <h2>Welcome 🎉</h2>
        <p>Subscription successful. You will now receive our latest news, updates, and exclusive content via email.</p>
      `,
    });

    return { status: "subscribed", data: user };
  }
}

module.exports = new NewsletterService();
