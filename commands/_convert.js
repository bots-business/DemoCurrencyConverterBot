/*CMD
  command: /convert
  help: convert one currency to other
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Please input amount.
For example: 76
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let from_cur = Bot.getProperty("from-currency");
let to_cur = Bot.getProperty("to-currency");

if(!from_cur||!to_cur){
  Bot.sendMessage("You need set conversation option:\n /option");
}else{
  Bot.sendMessage("Convert *" + message + " " + from_cur + "* to " + to_cur + "\nset other currencies /option");
  let query = from_cur + "_" + to_cur;
  Libs.CurrencyConverter.convert(query, message, "/onconvert" );
}
