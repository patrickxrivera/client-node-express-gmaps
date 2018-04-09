import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/posts';

class App extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Test</div>;
  }
}

export default connect(null, { fetchPosts })(App);
