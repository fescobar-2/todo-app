import React from "react";
import { Route, Switch} from 'react-router';
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Shopping from "./Components/Shopping";
import Login from "./Components/Login"

export default function MainRouter() {
  return(<div>
    <Navigation/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/shopping">
        <Shopping/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
    </Switch>
    </div>
  );
}