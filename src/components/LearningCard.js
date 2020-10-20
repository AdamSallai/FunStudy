import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

export default function LearningCard({
  callback,
  card,
  image,
  points,
  setPoints,
}) {
  const increasePoints = () => {
    let guess = document.getElementById("cpDev1").value;
    if (card.word === guess) {
      setPoints((points) => points + 1);
    }
  };

  const addNewCard = () => {
    increasePoints();
    callback(Math.random());
  };

  return (
    <div>
      <Card>
        <h3>Learning Card</h3>
        <h5>by Fun Study</h5>
        <img className="img" src={image} alt="" />
        <p>{card.definitions[0].definition}</p>
        <br />
      </Card>

      <InputContainer>
        <p>{card.word}</p>
        <p>Your points: {points}</p>
        <br />
        <label htmlFor="guess">Your guess: </label>
        <input type="text" name="guess" id="cpDev1"></input>
        <button type="submit" onClick={addNewCard}>
          Guess
        </button>
      </InputContainer>
    </div>
  );
}

const Card = styled.div`
  padding: 5px;
  width: 280px;
  height: 400px;
  text-align: center;
  margin: 20px auto;
  border: 1px black solid;
  border-radius: 6px;
  .img {
    border-radius: 8px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
  }
`;

const InputContainer = styled.div`
  position: fixed;
  bottom: 100px;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, 0);
`;
