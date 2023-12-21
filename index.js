require("dotenv").config();
const express = require("express");
const app = express();

const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "hello there! Welcome to my new telegram bot.",
    {}
  );
});

bot.telegram.sendMessage(873804475, "hi123");

bot.launch();
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });
app.listen(process.env.PORT);
