const Support = require("../models/support.model");
const mailer = require("../utils/mailer");

class SupportService {
  async createInquiry(data) {
    const inquiry = await Support.create(data);

    // 📧 Confirmation Email
    await mailer.sendMail({
      to: data.email,
      subject: "Support Inquiry Received",
      html: `
        <h2>Hello ${data.name}</h2>
        <p>Your inquiry has been received successfully.</p>
        <p>We will get back to you shortly.</p>
      `,
    });

    return inquiry;
  }
}

module.exports = new SupportService();
