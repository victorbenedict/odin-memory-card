import Game from './components/Game';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';

export default function Home() {
  return (
    <div>
      <Header />
      <Scoreboard />
      <Game />
    </div>
  );
}
