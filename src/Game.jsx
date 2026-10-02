import { useGame } from "./Context";
import MoleHole from "./MoleHole";

export default function Game() {
  const { score, setPlaying } = useGame();
  return (
    <div>
      <h1>Score: {score}</h1>
      <MoleHole number={0} />
      <MoleHole number={1} />
      <MoleHole number={2} />
      <MoleHole number={3} />
      <MoleHole number={4} />
      <MoleHole number={5} />
      <button onClick={() => setPlaying(false)}>Restart</button>
    </div>
  );
}
