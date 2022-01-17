import { createContext, useState } from "react";
import { PlayerMarker } from "../shared/tic-tac-toe";

export const PlayerContext = createContext();

export default function PlayerProvider({ children }) {
  // currentPlayer is the player who goes next - X always goes first
  const [currentPlayer, setCurrentPlayer] = useState(PlayerMarker.X);

  // playerMarkers stores which player is which marker - defaults to player 1 as X
  const [playerMarkers, setPlayerMarkers] = useState({
    playerOne: PlayerMarker.X,
    playerTwo: PlayerMarker.Circle,
  });

  // helper functions that will be passed in the context
  const setPlayerOneMarker = (marker) => {
    // sets the marker of player 1 and sets player 2 marker to the other option
    const newPlayers = {};
    newPlayers.playerOne = marker;
    if (marker === PlayerMarker.X) {
      newPlayers.playerTwo = PlayerMarker.Circle;
    } else {
      newPlayers.playerTwo = PlayerMarker.X;
    }
    setPlayerMarkers(newPlayers);
  };

  // switch to the next player
  const nextPlayer = () => {
    if (currentPlayer === PlayerMarker.X) {
      setCurrentPlayer(PlayerMarker.Circle);
    } else {
      setCurrentPlayer(PlayerMarker.X);
    }
  };

  // reset first player back to X
  const resetPlayers = () => setCurrentPlayer(PlayerMarker.X);

  return (
    <PlayerContext.Provider
      value={{
        currentPlayer,
        playerMarkers,
        setPlayerOneMarker,
        nextPlayer,
        resetPlayers,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
