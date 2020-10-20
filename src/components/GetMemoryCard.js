import React, { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";

export default function GetMemoryCard() {
  const randomWords = require("random-words");
  const Owlbot = require("owlbot-js");
  var client = Owlbot("d9babcf6a7b2f35f7cf176123956ef6dbe4b5585");
  const [card, setCard] = useState();
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let word = randomWords(1);
    setIsLoading(true);
    setErr(false);
    client
      .define(word)
      .then((result) => {
        setCard(result);
        setIsLoading(false);
      })
      .catch((e) => {
        setErr(true);
      });
  }, [err]);

  if (!isLoading) {
    return [
      <MemoryCard key={card.word} content={card.word} word={card.word} />,
      <MemoryCard key={card.definitions[0].definition} content={card.definitions[0].definition} word={card.word} />,
    ];
  } else return [];
}


