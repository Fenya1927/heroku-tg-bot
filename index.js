const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '961276810:AAHuvIQi8N38zHXaU24POvvby-vHj20XdtQ'

const bot = new TelegramBot(TOKEN,{polling:true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from Heroku, bot says: "Hi, ${msg.from.first_name}"`)
})