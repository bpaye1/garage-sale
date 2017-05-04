import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import createStore from '../store/create-store';
import Header from './header/header';
import Home from './home/home';

const history = createHistory();
const store = createStore(history);

const App = () => (
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;