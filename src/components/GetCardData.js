export default async function GetCardData() {
  const randomWords = require("random-words");
  const Owlbot = require("owlbot-js");
  var client = Owlbot("d9babcf6a7b2f35f7cf176123956ef6dbe4b5585");
  let resultData = "";

  const word = randomWords(1);
  client.define(word).then((result) => {
    console.log(result);
    resultData= result
  });
  

  return resultData;
}
