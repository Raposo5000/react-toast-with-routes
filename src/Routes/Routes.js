import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SecondPage from '../pages/SecondPage'
import Initial from '../pages/Initial'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Initial}/>
        <Route path="/SecondPage"  component={SecondPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
