
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ViewContainer from './containers/ViewContainer';
import AppContainer from './containers/AppContainer';
import NotFound from './containers/NotFound';
import store from './store';

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={AppContainer} />
        <Route exact path="/cars/:id" component={ViewContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
