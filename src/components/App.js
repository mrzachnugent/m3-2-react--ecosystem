import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import ItemsDetails from "./ItemsDetails";

const App = (props) => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/items/:itemID">
          <ItemsDetails />
        </Route>
      </Switch>
    </>
  );
};

export default App;
