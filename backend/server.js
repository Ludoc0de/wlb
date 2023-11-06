const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config({ path: "./backend/config/.env" });
const indexRoutes = require("./routes/index");
app.use(express.static("public"));
app.use("/api", indexRoutes);
// static files
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
// });

app.listen(process.env.PORT, () =>
  console.log(`Running on port ${process.env.PORT}!`)
);
