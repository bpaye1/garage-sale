import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/create-store';
import Header from './header/header';
import Home from './home/home';

const App = () => (
  <Provider store={store} >
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  </Provider>
);

export default App;