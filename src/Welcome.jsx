import { useGame } from "./Context";

const Welcome = () => {
  const { setPlaying, setScore, setMole } = useGame();
  const startGame = () => {
    setScore(0);
    setMole(Math.floor(Math.random() * 6));
    setPlaying(true);
  };
  return (
    <div>
      <h1>Whack-A-Mole</h1>
      <p>Click on the mole to get points</p>
      <button onClick={startGame}>Play!</button>
    </div>
  );
};

export default Welcome;
