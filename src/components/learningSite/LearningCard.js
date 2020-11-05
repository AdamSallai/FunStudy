import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function LearningCard({ callback, card, points, setPoints }) {
  const [transform, setTransform] = useState("front");
  const [buttonText] = useState("Guess");
  const [disabled, setDisability] = useState(false);
  const [guessed, setGuessed] = useState("unguessed");
  const [unknown, setUnknown] = useState(false);

  const increasePoints = () => {
    if (isTheWordGuessed()) {
      setPoints((points) => points + 1);
    }
  };

  const isUnknownCardToSession = () => {
    sessionStorage.setItem("unknownCardData", card);
    return true;
  };

  const isTheWordGuessed = () => {
    let guess = document.getElementById("cpDev1").value;
    if (card.word === guess) {
      return true;
    } else {
      isUnknownCardToSession();
      setUnknown(true);
      return false;
    }
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

  const isUnknownCardToSession = () => {
    sessionStorage.setItem("unknownCardData", card.word);
    return true;
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
              <img className="img" src={card.image_url} alt="" />
              <p>{card.definition}</p>
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
  padding: 0;
  text-align: center;
  background-color: transparent;
  width: 400px;
  height: 560px;
  box-sizing: border-box;
  transition: transform 1s ease-in-out;
  transform-style: preserve-3d;
  transform: ${(props) => transforms[props.transform]};
  .img {
    border-radius: 12px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 250px;
  }
  .guessed {
    background: #2e7d32;
  }
  .unguessed {
    background: #b71c1c;
  }
`;

const Front = styled.div`
  padding: 0;
  position: absolute;
  backface-visibility: hidden;
  width: 400px;
  height: 560px;
  box-sizing: border-box;
  border-radius: 25px;
  border-color: #f57c00;
  border-width: 5px;
  border-style: solid;
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
    h3 {
      padding-top: 10px;
      font-size: 36px;
    }
    h5 {
      padding-top: 5px;
      font-size: 24px;
    }
    p {
      padding-top: 16px;
      font-size: 22px;
    }
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
  width: 400px;
  height: 560px;
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
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 16pt;
  width: 300px;
  input {
    padding: 0px 10px;
    height: 40px;
    width: 100%;
    font-size: 24px;
    box-sizing: border-box;
  }
  .true {
    background-color: grey;
    border-color: darkgray;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  color: white;
  background-color: #e65100;
  border-color: #f57c00;
  font-size: 24px;
`;

const Continue = styled.button`
  color: white;
  background-color: #e65100;
  border-color: #f57c00;
  font-size: 24px;
  width: 150px;
  height: 30px;
`;
const PointsContainer = styled.div`
  position: fixed;
  top: 12%;
  left: 4%;
  font-size: 24px;
  margin: 5px;
`;

const Points = styled.div`
  .point {
    color: red;
    font-weight: bold;
  }
`;
