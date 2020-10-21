export default function GetCardData(callback) {
  const randomWords = require("random-words");
  const Owlbot = require("owlbot-js");
  var client = Owlbot("d9babcf6a7b2f35f7cf176123956ef6dbe4b5585");

  const word = randomWords(1);
  client.define(word).then((result) => {
    callback(false);
    return result;
  });
}


export function getRandomWord() {
  return require("random-words");
}