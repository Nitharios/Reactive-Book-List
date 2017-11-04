import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './containers/App';
import BookView from './containers/BookView';
import NewBookForm from './containers/NewBookForm';
import About from './components/About';
import registerServiceWorker from './registerServiceWorker';
// import './index.css';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/new-book">New Book</Link>
        <Link to="/about">About</Link>

        <Route exact path="/" component={ App } />
        <Route path="/new-book" component={ NewBookForm } />
        <Route path="/about" component={ About } />
        
        <Route path="/books/:id" component={ BookView } />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();