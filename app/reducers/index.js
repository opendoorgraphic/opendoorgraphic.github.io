import { combineReducers } from 'redux';
import { routeReducer as routing } from 'react-router-redux';

import portfolio from './portfolio-reducer';

export default combineReducers({
  routing, portfolio
});
