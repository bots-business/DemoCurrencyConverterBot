/*CMD
  command: /convertto
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Please select
  keyboard: USD, EUR, CNY, JPY, RUB, \nGPB, AUD, NZD, THB, \nBTC, ETH, L
  aliases: 
CMD*/

// save currency label for conversation
Bot.setProperty("to-currency", message, "string");
Bot.sendMessage("Now you can convert - /convert");
