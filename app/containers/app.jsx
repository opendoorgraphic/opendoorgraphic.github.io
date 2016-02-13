import 'styles/commons/_reset.scss';
import 'styles/app.scss';

import { connect } from 'react-redux';
import { portfolio as portfolioAction } from 'actions';

import { Component } from 'react';
import { GlobalNavbar, GlobalFooter } from 'components/commons';

export class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props;

    dispatch(portfolioAction.init());
  }

  render () {
    const { children } = this.props;

    return (
      <div id="app">
        <GlobalNavbar/>
        { children }
        <GlobalFooter/>
      </div>
    );
  }
}

export default connect(state => state)(App);
