import 'styles/home.scss';

import _ from 'lodash';
import { connect } from 'react-redux';

import { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';
import PortfolioItem from 'components/portfolio/item';

export class Home extends Component {
  render () {
    const { meta } = this.props.portfolio;

    return (
      <Grid id="home">
        {
          _.map(meta, (item, index) => {
            return (
              <Col key={ index } sm={ 6 } md={ 4 } lg={ 2 }>
                <PortfolioItem item={ item }/>
              </Col>
            );
          })
        }
      </Grid>
    );
  }
}

export default connect(state => ({ portfolio: state.portfolio }))(Home);
