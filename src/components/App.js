import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './Home';
import Place from './Place';
import Places from './Places';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/results/place" component={Place} />
        <Route path="/results/places" component={Places} />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
