import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header/header';
import Home from './home/home';

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);

export default App;