import {applyMiddleware, createStore} from 'redux';

import App from 'components/app';
import {Provider} from 'react-redux';
import React from 'react';
import reducer from 'reducers';
import {render} from 'react-dom';
import thunk from 'redux-thunk';

const store = applyMiddleware(thunk)(createStore)(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
