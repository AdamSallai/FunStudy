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
      <div>
        {players.map((player) => 
          <Player key={player.email} player={player}></Player>
        )}
      </div>
    );
  } else return [];
}
