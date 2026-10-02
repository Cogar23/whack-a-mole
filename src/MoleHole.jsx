import { useGame } from "./Context";

function MoleHole({ number }) {
  const { mole, setMole, setScore } = useGame();
  const moveMole = () => {
    setScore((score) => score + 1);
    const randomHole = Math.floor(Math.random() * 6);
    setMole(randomHole);
  };
  return (
    <button onClick={mole === number ? moveMole : undefined}>
      {mole === number ? "Mole" : "Hole"}{" "}
    </button>
  );
}
export default MoleHole;
