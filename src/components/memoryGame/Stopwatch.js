import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Timer({ amount }) {
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
      <button
        onClick={() => {
          setTimerRunning(true);
        }}
      >
        Start
      </button>
      <p>
        {Math.floor(timer / 60) < 10
          ? "0" + Math.floor(timer / 60)
          : Math.floor(timer / 60)}
        :{timer % 60 < 10 ? "0" + (timer % 60) : timer % 60}
      </p>
      <button
        onClick={() => {
          setTimerRunning(false);
        }}
      >
        Stop
      </button>
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
