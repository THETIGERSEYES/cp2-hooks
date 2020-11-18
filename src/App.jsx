import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import './App.css';


// Création de title pour un passage en props
// Routing qui permet d'accéder à la liste des jeux 
// puis à un jeu en particulier via son id
function App() {
  const title = "Correction checkpoint 2  - Hooks version"
  
  return (
    <div className="App">
      <Router>
        <Header title={title} />
        <Switch>
          <Route exact path ='/' component={GameList} />
          <Route exact path ='/:id' component={GameDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
