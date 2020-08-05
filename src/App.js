import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route path="/search/:query" component={Home} />
            <Route component={Home} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
