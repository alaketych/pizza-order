import React from 'react';
import './App.css';

import { Header, Main, Cart, Switch, Route } from './components/index'

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" component={ Main } exact></Route>
        <Route path="/cart" component = { Cart }></Route>
      </Switch>
    </div>
  );
}

export default App;
