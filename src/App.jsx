import { useGame } from "./Context";
import Welcome from "./Welcome";
import Game from "./Game";

export default function App() {
  const { playing } = useGame();
  return <div>{playing ? <Game /> : <Welcome />}</div>;
}
