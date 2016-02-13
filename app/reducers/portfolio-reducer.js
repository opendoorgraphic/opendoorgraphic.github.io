import _ from 'lodash';
import { portfolio } from 'actions';
import { handleActions } from 'redux-actions';

const initialState = {
  meta: {},
  item: '',
  pathname: ''
};

export default handleActions({
  [portfolio.INIT]: (state, action) => {
    return _.assign({}, state, action.payload);
  },
  [portfolio.GO]: (state, action) => {
    return _.assign({}, state, action.payload);
  },
  [portfolio.NEXT]: (state, action) => {
    return _.assign({}, state, action.payload);
  },
  [portfolio.PREV]: (state, action) => {
    return _.assign({}, state, action.payload);
  }
}, initialState);
