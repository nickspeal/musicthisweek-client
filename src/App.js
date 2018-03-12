import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import About from './components/home/About';
import Search from './components/home/Search';
import Callback from './components/auth/Callback';
import { configureStore } from './store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/callback" component={Callback} />
        <Route path="/search" component={Search} />
        <Route component={About} />
      </Switch>
    </Router>
  </Provider>
)

export default App;
