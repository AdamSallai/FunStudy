import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { FoundCardContext, SelectedCardContext } from "./SelectedCardContext";

export default function Timer({ amount }) {
  const [timerRunning, setTimerRunning] = useState(false);
  const [selectedCards, setSelectedCards] = useContext(SelectedCardContext);
  const [timer, setTimer] = useState(0);
  const [stopWatch, setStopWatch] = useState(null);
  const [foundCard] = useContext(FoundCardContext);

  useEffect(() => {
    if (timerRunning) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [timerRunning]);

  useEffect(()=> {
    if(selectedCards.card1 !== "") {
      setTimerRunning(true)
    }
  }, [selectedCards])

  useEffect(() => {
    console.log("Amount "+amount);
    console.log(foundCard);
    if(foundCard === amount) {
      setTimerRunning(false);
    }
  }, [foundCard])

  const startTimer = () => {
    setStopWatch(
      setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000)
    );
  };

  const stopTimer = () => {
    clearInterval(stopWatch);
  };

  return (
    <StopWatch>
      <p>
        {Math.floor(timer / 60) < 10
          ? "0" + Math.floor(timer / 60)
          : Math.floor(timer / 60)}
        :{timer % 60 < 10 ? "0" + (timer % 60) : timer % 60}
      </p>
    </StopWatch>
  );
}

const StopWatch = styled.div`
  width: 10%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 30px;
`;
