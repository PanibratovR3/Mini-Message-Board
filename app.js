const express = require("express");
const path = require("path");
const app = express();
const indexRouter = require("./routes/indexRouter.js");

const PORT = 3000;
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.use("/", indexRouter);

app.use((error, request, response, next) => {
  console.error(`${error.name}: ${error.message}`);
});

app.listen(PORT, () => console.log("Server was launched!"));
