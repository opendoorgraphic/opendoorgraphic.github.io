import 'styles/portfolio.scss';

import _ from 'lodash';
import { toHTML } from 'markdown';
import { sprintf } from 'underscore.string';
import { connect } from 'react-redux';
import { portfolio as portfolioAction } from 'actions';

import { Component } from 'react';
import { Thumbnail, Pager, PageItem } from 'react-bootstrap';

export class Portfolio extends Component {
  componentDidMount () {
    const { dispatch, routeParams } = this.props;

    dispatch(portfolioAction.go(sprintf('/portfolio/%s', routeParams.title)));
  }

  componentDidUpdate (prevProps) {
    const { dispatch, routeParams } = this.props;

    if (!_.isEqual(prevProps.routeParams, routeParams)) {
      dispatch(portfolioAction.go(sprintf('/portfolio/%s', routeParams.title)));
    }
  }

  render () {
    const { dispatch, portfolio, routeParams } = this.props;
    let innerHTML = { __html: toHTML(portfolio.item) };

    return (
      <div>
        <Pager>
          <PageItem next onClick={ () => dispatch(portfolioAction.next()) }>next</PageItem>
          <PageItem previous onClick={ () => dispatch(portfolioAction.prev()) }>prev</PageItem>
        </Pager>
        <Thumbnail src={ sprintf('/portfolio/%s/origin.png', routeParams.title) }/>
        <article dangerouslySetInnerHTML={ innerHTML }/>
      </div>
    );
  }
}

export default connect(state => ({ portfolio: state.portfolio }))(Portfolio);
