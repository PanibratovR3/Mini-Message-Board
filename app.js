const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter.js");

const PORT = 3000;

app.use("/", indexRouter);

app.listen(PORT, () => console.log("Server was launched!"));
