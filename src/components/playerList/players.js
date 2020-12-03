import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getPlayers } from "../../api/GetPlayer";
import Player from "./player";

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getPlayers(setPlayers,setIsLoading);
  }, []);

  if (!isLoading) {
    return (
      <PlayerContainer>
        {players.map((player) => 
          <Player key={player.email} player={player}></Player>
        )}
      </PlayerContainer>
    );
  } else return [];
}


const PlayerContainer = styled.div`
  top: 120px;
  position: relative;
  width: 800px;
  margin: auto;
  text-align: center;
`