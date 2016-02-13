import 'styles/portfolio.scss';

import _ from 'lodash';
import { toHTML } from 'markdown';
import { sprintf } from 'underscore.string';
import { connect } from 'react-redux';
import { portfolio as portfolioAction } from 'actions';

import { Component } from 'react';
import { Col, Thumbnail, Pager, PageItem } from 'react-bootstrap';

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
      <div id="portfolio" className="clearfix">
        <Pager>
          <PageItem next onClick={ () => dispatch(portfolioAction.next()) }>
            <i className="icon-next"/>
          </PageItem>
          <PageItem previous onClick={ () => dispatch(portfolioAction.prev()) }>
            <i className="icon-previous"/>
          </PageItem>
        </Pager>
        <Col sm={ 8 }>
          <Thumbnail src={ sprintf('/portfolio/%s/origin.png', routeParams.title) }/>
        </Col>
        <Col sm={ 4 }>
          <article dangerouslySetInnerHTML={ innerHTML }/>
        </Col>
      </div>
    );
  }
}

export default connect(state => ({ portfolio: state.portfolio }))(Portfolio);
