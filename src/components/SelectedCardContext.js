import React, { useState, useEffect, createContext } from "react";

export const SelectedCardContext = createContext();

export const SelectedCardProvider = (props) => {
  const [selectedCards, setSelectedCards] = useState({ card1: "", card2: "" });

  useEffect(() => {
    checkSelectedCards();
  }, [selectedCards]);

  const checkSelectedCards = () => {
    if (selectedCards.card2 !== "") {
      if (selectedCards.card1[0] === selectedCards.card2[0]) {
      } else {
        selectedCards.card1[2]();
        selectedCards.card2[2]();
        setTimeout(() => {
          turnBackCards();
        }, 1000);
      }
      setSelectedCards({ card1: "", card2: "" });
    }
  };

  const turnBackCards = () => {
    selectedCards.card1[1]();
    selectedCards.card2[1]();
  };
  return (
    <SelectedCardContext.Provider value={[selectedCards, setSelectedCards]}>
      {props.children}
    </SelectedCardContext.Provider>
  );
};
