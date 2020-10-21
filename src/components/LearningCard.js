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
  const [transform, setTransform] = useState("front");
  const [buttonText, setButtonText] = useState("Guess");
  const [disabled, setDisability] = useState(false);
  const [guessed, setGuessed] = useState("unguessed");

  const increasePoints = () => {
    if (isTheWordGuessed()) {
      setPoints((points) => points + 1);
    }
  };

  const isTheWordGuessed = () => {
    let guess = document.getElementById("cpDev1").value;
    if (card.word === guess) {
      return true;
    }
    return false;
  };

  const flipCard = () => {
    setTransform((prev) => (prev === "front" ? "back" : "front"));
    setDisability(true);
    if (isTheWordGuessed()) {
      setGuessed("guessed");
    }
  };

  const addNewCard = () => {
    increasePoints();
    callback(Math.random());
  };

  return (
    <div>
      <CardContainer>
        <Card transform={transform}>
          <Back className={guessed}>
            <p className="correct-word">{card.word}</p>
          </Back>
          <Front>
            <div className="text-container">
              <h3>Learning Card</h3>
              <h5>by Fun Study</h5>
              <img className="img" src={image} alt="" />
              <p>{card.definitions[0].definition}</p>
              <br />
            </div>
          </Front>
        </Card>
      </CardContainer>

      <PointsContainer>
        <Points>
          <span>Your points: </span>
          <span className="point">{points}</span>
          <p style={{ color: "white" }}>{card.word}</p>
        </Points>

        <Continue type="submit" onClick={addNewCard}>
          Next card
        </Continue>
      </PointsContainer>

      <InputContainer>
        <label htmlFor="guess"></label>
        <input
          type="text"
          name="guess"
          id="cpDev1"
          placeholder="Your guess"
        ></input>

        <Button
          type="submit"
          onClick={flipCard}
          disabled={disabled}
          className={disabled}
        >
          {buttonText}
        </Button>
      </InputContainer>
    </div>
  );
}

const transforms = {
  front: "none",
  back: "rotateY(180deg)",
};

const CardContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 20%;
  transform: translate(-50%, 0);
`;

const Card = styled.div`
  padding: 5px;
  text-align: center;
  background-color: transparent;
  width: 280px;
  height: 400px;
  box-sizing: border-box;
  transition: transform 1s ease-in-out;
  transform-style: preserve-3d;
  transform: ${(props) => transforms[props.transform]};
  .img {
    border-radius: 8px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
  }
  .guessed {
    background: #2e7d32;
  }
  .unguessed {
    background: #b71c1c;
  }
`;

const Front = styled.div`
  position: absolute;
  backface-visibility: hidden;
  width: 280px;
  height: 400px;
  box-sizing: border-box;
  border-radius: 25px;
  border-color: #f57c00;
  border-width: 5px;
  border-style: solid;
  padding: 0;
  cursor: pointer;
  font-size: 16px;
  background-color: #181931;
  color: white;
  z-index: 2;
  transform: rotateY(0deg);
  p::first-letter {
    text-transform: uppercase;
  }
  p,
  img {
    margin-top: 10px;
  }
  .text-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    background-color: #323348;
    overflow: auto;
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
    ::-webkit-scrollbar {
      width: 15px;
    }
    ::-webkit-scrollbar-track {
      background: #323348;
    }
    ::-webkit-scrollbar-thumb {
      background: #181931;
    }
  }
`;

const Back = styled.div`
  backface-visibility: hidden;
  color: white;
  position: absolute;
  width: 280px;
  height: 400px;
  box-sizing: border-box;
  font-size: 20px;
  border-radius: 25px;
  border-color: #f57c00;
  border-width: 5px;
  border-style: solid;
  padding: 0;
  background: #181931;
  cursor: pointer;
  transform: rotateY(180deg);
  .correct-word {
    position: absolute;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const InputContainer = styled.div`
  position: fixed;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 16pt;
  input {
    width: 100%;
  }
  .true {
    background-color: grey;
    border-color: darkgray;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  color: white;
  background-color: #e65100;
  border-color: #f57c00;
  margin: 2px;
`;

const Continue = styled.button`
  color: white;
  background-color: #e65100;
  border-color: #f57c00;
`;
const PointsContainer = styled.div`
  position: fixed;
  top: 12%;
  left: 4%;
  font-size: 14pt;
  margin: 5px;
`;

const Points = styled.div`
  .point {
    color: red;
    font-weight: bold;
  }
`;
