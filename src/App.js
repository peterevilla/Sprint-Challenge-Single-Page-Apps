import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import WelcomePage from "./components/WelcomePage.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" render={routeProps => { return (<WelcomePage match={routeProps.match}/>);}}/>
      <Route path="/CharacterList" component={CharacterList} />
    </main>
  );
}
