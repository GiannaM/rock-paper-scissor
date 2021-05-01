
import { useSelector } from 'react-redux';
import './App.css';
import Contest from './components/Contest';
import Hands from './components/Hands';
import ScoreBoard from "./components/ScoreBoard"


function App() {

  const userHand = useSelector(state => state.game.userHand)
  return (
    <div className="App">
      <ScoreBoard/>
        {userHand? <Contest/>:<Hands/>}

    </div>
  );
}

export default App;
