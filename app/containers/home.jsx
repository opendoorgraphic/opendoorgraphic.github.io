import 'styles/home.scss';

import _ from 'lodash';
import { connect } from 'react-redux';

import { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';
import PortfolioItem from 'components/portfolio/item';

export class Home extends Component {
  render () {
    const { meta } = this.props.portfolio;

    var key = 0, square = 0;
    var items = { 0: [], 1: [], 2: [] };

    _.map(meta, (item, index) => {
      if (!_.isEqual(index, 0) && _.isEqual(square, 4)) {
        key++; square = 0;

        if (_.isEqual(key, 3)) { key = 0; }
      }

      square += item.size;
      items[key].push(item);
    });

    return (
      <Grid id="home">
        <Col md={ 4 }>
          {
            _.map(items[0], (item, index) => {
              return <PortfolioItem key={ index } item={ item }/>;
            })
          }
        </Col>
        <Col md={ 4 }>
          {
            _.map(items[1], (item, index) => {
              return <PortfolioItem key={ index } item={ item }/>;
            })
          }
        </Col>
        <Col md={ 4 }>
          {
            _.map(items[2], (item, index) => {
              return <PortfolioItem key={ index } item={ item }/>;
            })
          }
        </Col>
      </Grid>
    );
  }
}

export default connect(state => ({ portfolio: state.portfolio }))(Home);
