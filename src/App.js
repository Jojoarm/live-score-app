import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GameInfo from './Components/GameInfo';
import LeagueInfo from './Components/LeagueInfo';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game/:id" component={GameInfo}/>
        <Route path="/league/:id" exact component={LeagueInfo}/>d
      </Switch>
    </Router>
    
  );
}

export default App;
