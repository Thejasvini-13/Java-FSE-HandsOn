import './App.css';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

function App() {

  const flag = true;

  if (flag) {
    return (
      <div className="container">
        <ListofPlayers />
      </div>
    );
  }
  else {
    return (
      <div className="container">
        <IndianPlayers />
      </div>
    );
  }
}

export default App;