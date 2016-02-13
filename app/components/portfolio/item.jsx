import { sprintf } from 'underscore.string';

import { Component, PropTypes } from 'react';
import { Thumbnail } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class PortfolioItem extends Component {
  render () {
    const { item } = this.props;

    return (
      <LinkContainer to={ item.path }>
        <Thumbnail src={ sprintf('%s/thumbnail.png', item.path) }>
          { item.title }
        </Thumbnail>
      </LinkContainer>
    );
  }
}

PortfolioItem.propTypes = {
  item: PropTypes.object.isRequired
};
