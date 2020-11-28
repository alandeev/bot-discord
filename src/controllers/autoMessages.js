const messages = {
  'alankun': '<@771545919841632346> tão falando de você!',
  'alan kun': '<@771545919841632346> tão falando de você!',
  'alandev': '<@771545919841632346> tão falando de você!',
  'alan dev': '<@771545919841632346> tão falando de você!',
}

module.exports = (message) => {
  if(!message.content || typeof(message.content) !== 'string') return;

  let [ msg ] = Object.keys(messages).filter(key => message.content.match(key))

  return msg ? message.reply(messages[msg]) : false;
}
