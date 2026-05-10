const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "KDN Group Newsletter & Support API",
      version: "1.0.0",
      description:
        "API documentation for KDNG Group Newsletter and Support services",
    },

    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },

  // ✅ ABSOLUTE PATH FIX
  apis: [path.join(__dirname, "../routes/*.js")],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
