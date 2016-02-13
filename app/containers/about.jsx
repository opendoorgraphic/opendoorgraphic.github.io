import 'styles/about.scss';

import { connect } from 'react-redux';

import { Component } from 'react';

export class About extends Component {
  render () {
    return (
      <div id="about">
        <h2>this is what we do</h2>
        <p>
          We are a fairly small, flexible design studio that designs for print and web.
          We work flexibly with clients to fulfil their design needs.
          Whether you need to create a brand from scratch, including marketing materials
          and a beautiful and functional website or whether you are looking for a design
          refresh we are confident you will be pleased with the results.
        </p>
      </div>
    );
  }
}

export default connect(state => ({ about: state.about }))(About);
