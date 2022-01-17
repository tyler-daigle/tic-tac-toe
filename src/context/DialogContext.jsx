import { createContext, useState } from "react";

export const DialogContext = createContext();

export default function DialogProvider({ children }) {
  const [gameDialogVisible, setGameDialogVisible] = useState(false);
  const toggleGameDialog = () => setGameDialogVisible(!gameDialogVisible);
  const hideDialog = () => setGameDialogVisible(false);

  return (
    <DialogContext.Provider
      value={{ gameDialogVisible, toggleGameDialog, hideDialog }}
    >
      {children}
    </DialogContext.Provider>
  );
}
