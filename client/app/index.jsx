import { Route, Router, browserHistory } from 'react-router';
import { applyMiddleware, createStore } from 'redux';

import AppContainer from 'containers/app-container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NotFound from 'components/not-found';
import PatientContainer from 'containers/patient-container';
import { Provider } from 'react-redux';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducer from 'reducers';
import { render } from 'react-dom';
import thunk from 'redux-thunk';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = applyMiddleware(thunk)(createStore)(reducer);

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer} />
        <Route path="/patient/:id" component={PatientContainer} />
        <Route path="*" component={NotFound} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
