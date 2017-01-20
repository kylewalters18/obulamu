import { Route, Router, browserHistory } from 'react-router';
import { applyMiddleware, createStore } from 'redux';

import AppContainer from 'containers/app-container';
import PatientContainer from 'containers/patient-container';
import { Provider } from 'react-redux';
import React from 'react';
import reducer from 'reducers';
import { render } from 'react-dom';
import thunk from 'redux-thunk';

const store = applyMiddleware(thunk)(createStore)(reducer);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer} />
      <Route path="/patient/:id" component={PatientContainer} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
