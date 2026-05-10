const Support = require("../models/support.model");
const mailer = require("../utils/mailer");

class SupportService {
  async createInquiry(data) {
    // Check for duplicate inquiry
    const existingInquiry = await Support.findOne({
      email: data.email,
      message: data.message,
    });

    if (existingInquiry) {
      return {
        status: "exists",
        message:
          "This inquiry has already been submitted to KDN Group. Our support team will get back to you shortly..",
        data: existingInquiry,
      };
    }

    // Save inquiry
    const inquiry = await Support.create(data);

    // Send confirmation email
    await mailer.sendMail({
      to: data.email,
      subject: "Support Inquiry Received",
      html: `
        <h2>Hello, Welcome to KDN Group ${data.name}</h2>
        <p>Your inquiry has been successfully submitted to KDNG Group. Our support team will review your request and get back to you shortly..</p>
        <p>Thank you for reaching out to us.</p>`,
    });

    return {
      status: "created",
      message: "Inquiry submitted successfully.",
      data: inquiry,
    };
  }
}

module.exports = new SupportService();
