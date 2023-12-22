require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
// const { Telegraf } = require("telegraf");

// const bot = new Telegraf(process.env.BOT_TOKEN);
// bot.launch();

// bot.command("start", (ctx) => {
//   console.log(ctx.from);
//   bot.telegram.sendMessage(
//     ctx.chat.id,
//     "hello there! Welcome to my new telegram bot.",
//     {}
//   );
// });

app.post("/sendMessage", function (req, res) {
  bot.sendMessage(873804475, `<b>company</b>`, { parse_mode: "HTML" });

  // bot.telegram.sendMessage(
  //   873804475,
  //   `company:${req.body.company}\nphone:${req.body.phone}\nclient:${req.body.client}\nemail:${req.body.email}\n`
  // );
  res.end();
});

// process.once("SIGINT", () => bot.stop("SIGINT"));
// process.once("SIGTERM", () => bot.stop("SIGTERM"));

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });
app.listen(process.env.PORT);
