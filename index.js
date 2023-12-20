require("dotenv").config();
const express = require("express");
const app = express();

const Telegraf = require("telegraf");

const bot = new Telegraf("");

bot.command("start", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "hello there! Welcome to my new telegram bot.",
    {}
  );
});

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.listen(process.env.PORT);
