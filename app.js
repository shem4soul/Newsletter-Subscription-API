const express = require("express");
const newsletterRoutes = require("./routes/newsletter.routes");

const app = express();

app.use(express.json());

app.use("/newsletter", newsletterRoutes);

module.exports = app;
