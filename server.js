const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.use(express.static("public"));

app.listen(PORT, function () {
    console.log("app listening on port" + PORT)
});