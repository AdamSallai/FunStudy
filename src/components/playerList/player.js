import React from "react";
import styled from "styled-components";
import { deletePlayer } from "../../api/GetPlayer";

export default function Player({ player }) {
  return (
    <PlayerDiv>
      <p>{player.firstName}</p>
      <p>{player.lastName}</p>
      <p>{player.email}</p>
      <button
        onClick={() => {
          deletePlayer(player.id);
          window.location.href = "/players";
        }}
      >
        Delete player
      </button>
    </PlayerDiv>
  );
}

const PlayerDiv = styled.div``;
