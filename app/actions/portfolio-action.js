import _ from 'lodash';
import { hashHistory } from 'react-router';
import { sprintf } from 'underscore.string';
import { createAction } from 'redux-actions';

export const GO = '[FETCH] PORTFOLIO_GO';
export const INIT = '[FETCH] PORTFOLIO_INIT';
export const NEXT = 'PORTFOLIO_NEXT';
export const PREV = 'PORTFOLIO_PREV';

/* =========================================================
 * Internal Actions
 * ========================================================= */

export const __next__ = createAction(NEXT);
export const __prev__ = createAction(PREV);

/* =========================================================
 * Actions
 * ========================================================= */

export const go = createAction(GO, pathname => ({
  dist: 'item', path: sprintf('%s/summary.md', pathname), status: 'goStatus', pathname
}));

export const init = createAction(INIT, () => ({
  dist: 'meta', path: '/portfolio/meta.json', status: 'initStatus'
}));

export const next = () => (dispatch, getState) => {
  const { meta, pathname } = getState().portfolio;

  var index = _.findIndex(meta, item => _.isEqual(item.path, pathname)) + 1;

  if (index >= meta.length) {
    index = 0;
  }

  hashHistory.push({ pathname: meta[index].path });
};

export const prev = () => (dispatch, getState) => {
  const { meta, pathname } = getState().portfolio;

  var index = _.findIndex(meta, item => _.isEqual(item.path, pathname)) - 1;

  if (index < 0) {
    index = meta.length - 1;
  }

  hashHistory.push({ pathname: meta[index].path });
};
