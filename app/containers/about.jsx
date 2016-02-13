import 'styles/about.scss';

import { connect } from 'react-redux';

import { Component } from 'react';

export class About extends Component {
  render () {
    return (
      <div>
        about
      </div>
    );
  }
}

export default connect(state => ({ about: state.about }))(About);
