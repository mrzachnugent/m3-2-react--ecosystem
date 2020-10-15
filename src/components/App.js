import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import ItemsDetails from "./ItemsDetails";
import GlobalStyle from "../GlobalStyle";
import Sellers from "./Sellers";
import SellerDetails from "./SellerDetails";

const App = (props) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/sellers">
          <Sellers />
        </Route>
        <Route path="/sellers/:sellerID">
          <SellerDetails />
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
