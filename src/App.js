import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Location from './pages/Location';

import "./App.sass"

function App() {
  return (
      <div className="App">
          <Switch>
            <Route path="/locations/:id" component={Location} />
            <Route component={Home} />
          </Switch>
      </div>
  );
}

export default App;
