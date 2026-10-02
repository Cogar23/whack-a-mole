import { createContext, useState, useContext } from "react";
const Context = createContext();
export function Whack({ children }) {
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [mole, setMole] = useState(0);
  return (
    <Context.Provider
      value={{ playing, setPlaying, score, setScore, mole, setMole }}
    >
      {children}
    </Context.Provider>
  );
}
export default Context;
export function useGame() {
  return useContext(Context);
}
