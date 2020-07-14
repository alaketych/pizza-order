import React, { useState, useEffect } from 'react';
import './App.css';

import { Header, Switch, Route } from './components/index'
import { Main, Cart  }           from './components/pages/index'

function App() {
  const [pizza, setPizza] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/pizza.json')
      .then(response => response.json())
      .then(data => {
        setPizza(data.pizza)
      })
  }, [])

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/"     render    = { () => <Main items={pizza}/>} exact></Route>
        <Route path="/cart" component = { Cart } exact></Route>
      </Switch>
    </div>
  );
}

export default App;
