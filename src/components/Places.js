import React, { Component } from 'react';
import { CardTitle, CardText } from 'material-ui/Card';
import { connect } from 'react-redux';
import map from 'lodash/map';

import { PlaceCard } from './Styles';

class Places extends Component {
  renderPlace = ({ name, price_level, rating }, idx) => (
    <PlaceCard key={idx}>
      <CardTitle title={name} subtitle={`Rating: ${rating}`} />
      <CardText>Price Level: {price_level}</CardText>
    </PlaceCard>
  );
  render() {
    const { results } = this.props;

    return <div>{results.map(this.renderPlace)}</div>;
  }
}

const mapStateToProps = (state) => ({
  results: state.places
});

export default connect(mapStateToProps)(Places);
