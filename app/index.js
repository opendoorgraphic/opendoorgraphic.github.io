import store from 'store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

import { App, Home, About, Contact, Portfolio, NoMatch } from 'containers';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home }/>
        <Route path="about" component={ About }/>
        <Route path="contact" component={ Contact }/>
        <Route path="portfolio/:title" component={ Portfolio }/>
        <Route path="**" component={ NoMatch }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
