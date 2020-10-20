import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function LearningData() {
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
    client.define(word)
      .then(result => {
        console.log(result);
        setCard(result);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("eh");
        setErr(true);
      });
  }, [err]);

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  } else {
    let image = null;
    card.definitions.forEach(item => {
      if (item.image_url !== null) {
        image = item.image_url;
      }
    })
    return (
      <div className="card">
        <p>{card.word}</p>
        <img src={image} alt="" />
        <p>{card.definitions[0].definition}</p>

        <form action="/learning">
          <label htmlFor="answer">Your guess: </label>
            <input type="text"></input>
          <button type="submit">Guess</button>
      </form>

      </div>
    );
  }
}
