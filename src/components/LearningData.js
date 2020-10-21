import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LearningCard from "./LearningCard";

export default function LearningData() {
  const randomWords = require("random-words");
  const Owlbot = require("owlbot-js");
  var client = Owlbot("d9babcf6a7b2f35f7cf176123956ef6dbe4b5585");
  const [card, setCard] = useState();
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [guess, setGuess] = useState();
  const [points, setPoints] = useState(0);
  let word;

  useEffect(() => {
    word = randomWords(1);
    setIsLoading(true);
    setErr(false);
    client
      .define(word)
      .then((result) => {
        console.log(result);
        setCard(result);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("eh");
        setErr(true);
      });
  }, [err, guess]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    let image = null;
    card.definitions.forEach((item) => {
      if (item.image_url !== null) {
        image = item.image_url;
      }
    });
    return (
      <LearningCard
        callback={setGuess}
        card={card}
        image={image}
        points={points}
        setPoints={setPoints}
      />
    );
  }
}

 