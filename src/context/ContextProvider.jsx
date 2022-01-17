import GameProvider from "./GameContext";
import BoardProvider from "./BoardContext";
import DialogProvider from "./DialogContext";
import PlayerProvider from "./PlayerContext";

export default function ContextProvider({ children }) {
  return (
    <DialogProvider>
      <BoardProvider>
        <PlayerProvider>
          <GameProvider>{children}</GameProvider>
        </PlayerProvider>
      </BoardProvider>
    </DialogProvider>
  );
}
