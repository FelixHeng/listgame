import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GameList from "./components/GameList";
import "./App.css";
import Screenshot from "./screen/Screenshot";

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
