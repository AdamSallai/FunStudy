import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { SelectedCardContext } from "./SelectedCardContext";

export default function Timer({ amount }) {
  const [foundCard, setFoundCard] = useContext(SelectedCardContext);
  const [selectedCards, setSelectedCards] = useContext(SelectedCardContext);

  useEffect(() => {}, []);

  return (
    <StopWatch>
      <p>00</p>
      <p>:</p>
      <p>00</p>
    </StopWatch>
  );
}

const StopWatch = styled.div`
   margin-top: 90px;
   margin-right: 45%;
   margin-left: 45%;
   width: 10%;
   height: 50px;
   display:flex;
   align-items:center;
   font-size:30px;
`;
