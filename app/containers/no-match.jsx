import 'styles/no-match.scss';

import { Component } from 'react';
import { Grid, Panel } from 'react-bootstrap';

export default class NoMatch extends Component {
  render () {
    return (
      <Grid id="no-match">
        <Panel>
          존재하지 않는 페이지
        </Panel>
      </Grid>
    );
  }
}
