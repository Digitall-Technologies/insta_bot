const express = require("express");
const cron = require("node-cron");
const app = express();
const port = process.env.PORT || 3001;
const { runFollowBot } = require("./index.js");

cron.schedule("0 0 * * *", function () {
  console.log("---------------------");
  console.log("running a task every 24 hours");
  runFollowBot();
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
