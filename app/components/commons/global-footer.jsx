import 'styles/commons/global-footer.scss';

import { Component } from 'react';

export default class GlobalFooter extends Component {
  render () {
    return (
      <div id="global-footer">
        <div className="external">
          <a href="" target="_blank">
            <i className="icon-behance"/>
          </a>
          <a href="" target="_blank">
            <i className="icon-instagram"/>
          </a>
        </div>
        <address>
          Opendoor graphic by Hyunkyu Lee. 
        </address>
      </div>
    );
  }
}
