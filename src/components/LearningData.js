import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function LearningData() {
  const randomWords = require("random-words");
  const Owlbot = require("owlbot-js");
  var client = Owlbot("d9babcf6a7b2f35f7cf176123956ef6dbe4b5585");
  let [card, setCard] = useState();
  let [isLoading, setIsLoading] = useState(true);
  let word;

  useEffect(() => {
    word = randomWords(1);
    console.log(word);
    setIsLoading(true);
    client.define(word)
    .then(function (result) {
        console.log(result);
        setCard(result);
        setIsLoading(false);
      })
    .catch((err) => {
        console.log(err);
        word = randomWords(1);
      });    
  }, [word]);

  if(isLoading) {
      return( 
      <div>Loading...</div>
      );
  } else {
    return (
        <div className="card">
            {card.definitions.map((item) => 
            (item.image_url && <img src ={item.image_url}></img>)
            )
            }
        <p>{card.word}</p>
        </div>
    );
  }
}
