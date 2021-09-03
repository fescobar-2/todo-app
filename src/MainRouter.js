import React from "react";
import { Route, Switch} from 'react-router';
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Shopping from "./Components/Shopping";

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
    </Switch>
    </div>
  );
}