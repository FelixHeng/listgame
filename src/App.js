import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GameList from './components/GameList/GameList';
import './App.css';
import Screenshot from './pages/Screenshot';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={GameList} />
        <Route path="/jeu/screenshots/:id" component={Screenshot} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
