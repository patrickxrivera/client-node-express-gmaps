import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './Home';
import Results from './Results';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
