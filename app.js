const express = require("express");
const path = require("path");
const app = express();
const indexRouter = require("./routes/indexRouter.js");

const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, () => console.log("Server was launched!"));
