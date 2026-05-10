📧 KDN Group Newsletter & Support API

## API Documentation

Swagger documentation is available at:

http://localhost:8000/api-docs

A scalable backend API built with Node.js, Express, MongoDB, Joi, and Nodemailer following strict MVC architecture.

This project provides endpoints for:

Newsletter subscription
Newsletter unsubscription
Support inquiry submission
Email notifications
Request validation
🚀 Features
Subscribe to newsletter
Unsubscribe from newsletter
Send support inquiries
Duplicate subscription prevention
Duplicate inquiry prevention
Welcome email notifications
Inquiry confirmation emails
Joi validation middleware
Strict MVC architecture
MongoDB database integration
🧱 Tech Stack
Node.js
Express.js
MongoDB
Mongoose
Joi
Nodemailer
Dotenv
📁 Project Structure
kdng-newsletter-api/
│
├── src/
│   ├── config/
│   │     └── db.js
│   │
│   ├── controllers/
│   │     ├── newsletter.controller.js
│   │     └── support.controller.js
│   │
│   ├── middlewares/
│   │     └── validate.js
│   │
│   ├── models/
│   │     ├── newsletter.model.js
│   │     └── support.model.js
│   │
│   ├── routes/
│   │     ├── newsletter.routes.js
│   │     └── support.routes.js
│   │
│   ├── services/
│   │     ├── newsletter.service.js
│   │     └── support.service.js
│   │
│   ├── utils/
│   │     └── mailer.js
│   │
│   ├── validators/
│   │     ├── newsletter.validator.js
│   │     └── support.validator.js
│   │
│   └── app.js
│
├── .env
├── server.js
├── package.json
└── README.md
🧠 MVC Architecture

This project follows the MVC (Model-View-Controller) design pattern.

Layer	Responsibility
Models	Define database schemas
Controllers	Handle HTTP requests and responses
Services	Handle business logic and email functionality
Routes	Define API endpoints
Validators	Validate incoming request data
Middlewares	Handle reusable request processing
📌 API Endpoints
METHOD	ENDPOINT	DESCRIPTION
POST	/newsletter/subscribe	Subscribe to newsletter
DELETE	/newsletter/unsubscribe	Unsubscribe from newsletter
POST	/support/inquiry	Submit support inquiry
📧 Newsletter Subscription
Endpoint
POST /newsletter/subscribe
Request Body
{
  "email": "user@example.com"
}
Success Response
{
  "success": true,
  "message": "You have successfully subscribed to the KDNG Group newsletter. Stay connected for the latest updates, news, and insights delivered directly to your inbox."
}
Duplicate Subscription Response
{
  "success": true,
  "message": "This email is already subscribed to the KDNG Group newsletter. Stay tuned for upcoming updates and news."
}
🗑 Newsletter Unsubscribe
Endpoint
DELETE /newsletter/unsubscribe
Request Body
{
  "email": "user@example.com"
}
Success Response
{
  "success": true,
  "message": "You have successfully unsubscribed from the KDNG Group newsletter. You will no longer receive email updates from us."
}
🎧 Support Inquiry
Endpoint
POST /support/inquiry
Request Body
{
  "name": "Emmanuel Shittu",
  "email": "user@example.com",
  "message": "I need assistance with my account."
}
Success Response
{
  "success": true,
  "message": "Your inquiry has been successfully submitted to KDNG Group. Our support team will review your request and get back to you shortly."
}
Duplicate Inquiry Response
{
  "success": true,
  "message": "This inquiry has already been submitted to KDNG Group. Our support team will get back to you shortly."
}
📬 Email Notifications

The system automatically sends emails for:

Successful newsletter subscription
Successful support inquiry submission

Email delivery is handled using Nodemailer.

⚙️ Installation
1. Clone Repository
git clone <repository-url>
2. Navigate Into Project
cd kdng-newsletter-api
3. Install Dependencies
npm install
🔐 Environment Variables

Create a .env file in the root directory:

PORT=5000

MONGO_URI=your_mongodb_connection_string

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
▶️ Running The Application
Development Mode
npm run dev
Production Mode
npm start
🧪 Testing

You can test the API using:

Postman
Thunder Client
Insomnia
📌 Validation Rules
Newsletter
Email is required
Email must be valid
Duplicate subscriptions are prevented
Support Inquiry
Name is required
Email is required
Message is required
Duplicate inquiries are prevented
💡 Future Improvements
Authentication system
Rate limiting
Swagger API documentation
Unit testing
Email queue system
Admin dashboard
Analytics system
👨‍💻 Author

Emmanuel Shittu

Backend Developer Assessment Project

📄 License

This project is for educational and assessment purposes.
