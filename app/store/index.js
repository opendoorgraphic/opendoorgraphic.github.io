import thunk from 'redux-thunk';
import { api } from 'middleware';
import createLogger from 'redux-logger';
import { hashHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';

import reducers from '../reducers';

export default compose(
  applyMiddleware( thunk, createLogger(), api, syncHistory(hashHistory) )
)(createStore)(reducers);
