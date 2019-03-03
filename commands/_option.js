/*CMD
  command: /option
  help: set convert option
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Please select the currency for convertation or input it.
For example: USD.
  ANSWER
  keyboard: USD, EUR, CNY, JPY, RUB, \nGPB, AUD, NZD, THB, \nBTC, ETH, LTC
  aliases: 
CMD*/

// save currency label for conversation
Bot.setProperty("from-currency", message, "string");
Bot.sendMessage("The " + message + " will be converted to..." );
Bot.runCommand("/convertto");
