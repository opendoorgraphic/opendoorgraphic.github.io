import { sprintf } from 'underscore.string';
import classNames from 'classnames';

import { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Panel } from 'react-bootstrap';

export default class PortfolioItem extends Component {
  render () {
    const { item } = this.props;

    return (
      <Link to={ item.path } className={ classNames({ ['size-' + item.size]: true }) }>
        <Panel className="portfolio-item" style={{
          backgroundImage: sprintf('url("%s/thumbnail.png")', item.path) 
        }}>
          <h2>{ item.title }</h2>
        </Panel>
      </Link>
    );
  }
}

PortfolioItem.propTypes = {
  item: PropTypes.object.isRequired
};
