const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "KDNG Group Newsletter & Support API",
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

  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
