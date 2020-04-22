const TelegramBot = require('node-telegram-bot-api');
const TOKEN = "1238810420:AAFJSDhfWpYSgn062QjrrlXzSp8fGzfsOIw;"
const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `hello from bot123: "dratuti, ${msg.from.first_name}"`);
})
