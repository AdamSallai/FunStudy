import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { SelectedCardContext } from "./SelectedCardContext";

export default function Timer({ amount }) {
  const [foundCard, setFoundCard] = useContext(SelectedCardContext);
  const [selectedCards, setSelectedCards] = useContext(SelectedCardContext);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [stopWatch, setStopWatch] = useState(null);


  useEffect(() => {
    if (timerRunning) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [timerRunning]);

  const startTimer = () => {
    setStopWatch(setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000))
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
      </p>
      <p>:</p>
      <p>{timer % 60 < 10 ? "0" + (timer % 60) : timer % 60}</p>
      <button
        onClick={() => {
          setTimerRunning(false);
        }}
      >
        Stop
      </button>
      <button
        onClick={() => {
          setTimerRunning(true);
        }}
      >
        Start
      </button>
    </StopWatch>
  );
}

const StopWatch = styled.div`
  margin-top: 90px;
  margin-right: 45%;
  margin-left: 45%;
  width: 10%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 30px;
`;
