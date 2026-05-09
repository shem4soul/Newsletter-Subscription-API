const express = require("express");
const newsletterRoutes = require("./routes/newsletter.routes");
const supportRoutes = require("./routes/support.routes");

const app = express();

app.use(express.json());

app.use("/newsletter", newsletterRoutes);
app.use("/support", supportRoutes);

module.exports = app;
