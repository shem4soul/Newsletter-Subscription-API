const express = require("express");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const newsletterRoutes = require("./routes/newsletter.routes");
const supportRoutes = require("./routes/support.routes");

const app = express();

app.use(express.json());

/**
 * Swagger Docs
 */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/newsletter", newsletterRoutes);
app.use("/support", supportRoutes);

module.exports = app;
