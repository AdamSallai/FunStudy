import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function MemoryCard() {
  const randomWords = require("random-words");
  const Owlbot = require("owlbot-js");
  var client = Owlbot("d9babcf6a7b2f35f7cf176123956ef6dbe4b5585");
  const [card, setCard] = useState();
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  let word;

  useEffect(() => {
    word = randomWords(1);
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
      <GameCard onClick={()=>{console.log(card.word);}} >{card.word}</GameCard>,
      <GameCard onClick={()=>{console.log(card.definitions[0].definition);}}>{card.definitions[0].definition}</GameCard>,
    ];
  } else return [];
}

const GameCard = styled.div`
  height: 200px;
  width: 150px;
  font-size: 20px;
  border-radius: 5%;
  border-color: black;
  border-width: 5px;
  border-style:solid;
  padding: 10px 10px;
  text-align: center;
  overflow:scroll;
  color:black;
`;

