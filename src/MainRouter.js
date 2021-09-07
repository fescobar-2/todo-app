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
      <Route exact path={`${process.env.PUBLIC_URL}/`}>
        <Home/>
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/shopping`}>
        <Shopping/>
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/login`}>
        <Login/>
      </Route>
    </Switch>
    </div>
  );
}