import 'isomorphic-fetch';

import _ from 'lodash';
import { sprintf, contains, startsWith, endsWith } from 'underscore.string';

const API_ROOT = 'http://opendoorgraphic.github.io';

export const api = store => next => action => {
  const { path } = action.payload;
  const actionWith = props => {
    let _action = _.cloneDeep(action);
    _action.payload = _.assign({}, action.payload, props);
    delete _action.payload.path;

    return _action;
  };

  // stop to current dispatch loop when removed path.
  if (!contains(action.type, 'FETCH') || !_.has(action.payload, 'path')) { 
    return next(action); 
  }

  var fullPath = '';
  if (startsWith(path, 'http')) {
    fullPath = path;
  } else {
    var _path = startsWith(path, '/') ? path : '/' + path;
    fullPath = sprintf('%s%s', API_ROOT, _path);
  }

  let dist = _.get(action.payload, 'dist', 'response');
  let status = _.get(action.payload, 'status', 'status');

  delete action.payload.dist;
  delete action.payload.status;

  next(actionWith({ [status]: 'request' }));

  let request = fetch(fullPath)
  .then(response => {
    if (!response.ok) {
      store.dispatch(actionWith({ [status]: 'failure' }));
      return;
    }

    // figure out content-type for parsing.
    var type = 'json';
    if (endsWith(fullPath, '.md')) {
      type = 'text';
    }

    return response[type]();
  })
  .then(response => {
    var payload = { [status]: 'success' };
    _.set(payload, dist, response);

    store.dispatch(actionWith(payload));
  })
  .catch(error => {
    store.dispatch(actionWith({ [status]: 'failure', error }));
  });

  return request;
};
