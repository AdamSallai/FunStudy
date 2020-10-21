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
      <Points>
        <span>Your points: </span>
        <span className="point">{points}</span>
        <p>{card.word}</p>
      </Points>

      <InputContainer>
        <label htmlFor="guess"></label>
        <input
          type="text"
          name="guess"
          id="cpDev1"
          placeholder="Your guess"
        ></input>

        <Button type="submit" onClick={addNewCard}>
          Guess
        </Button>
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
  bottom: 120px;
  left: 50%;
  transform: translate(-50%, 0);
  margin: 5px;
  font-size: 16pt;
  .input {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 100%;
  color: white;
  background-color: #313648;
`;

const Points = styled.div`
  position: fixed;
  top: 12%;
  left: 4%;
  font-size: 14pt;
  margin: 5px;
  .point {
    color: red;
    font-weight: bold;
  }
`;
