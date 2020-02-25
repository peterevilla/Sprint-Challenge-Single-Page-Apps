import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import WelcomePage from "./components/WelcomePage.js";
import { Route } from "react-router-dom";
import LocationList from './components/LocationsList'


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" render={routeProps => { return (<WelcomePage match={routeProps.match}/>);}}/>
      <Route exact path="/CharacterList" component={CharacterList} />
      <Route exact path="/LocationList" component={LocationList} />
    </main>
  );
}
