import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import {
  Title,
  FieldWrapper,
  StyledCard,
  fieldStyle,
  ButtonWrapper
} from './Styles';
import { fetchPlace, fetchPlaces } from '../actions/places';
import { TextField } from 'redux-form-material-ui';

class Home extends Component {
  componentDidMount() {
    this.props.fetchPlace();
    this.props.fetchPlaces();
  }

  render() {
    return (
      <StyledCard>
        <Title>Places.io</Title>
        <FieldWrapper>
          <Field
            autoFocus={true}
            name="Search"
            component={TextField}
            fullWidth={true}
            hintText="Search"
            style={fieldStyle}
          />
        </FieldWrapper>
        <ButtonWrapper>
          <RaisedButton type="submit" primary={true} label="Search" />
          <RaisedButton type="submit" label="I'm feeling lucky" />
        </ButtonWrapper>
      </StyledCard>
    );
  }
}

export default reduxForm({
  form: 'search',
  fields: ['search']
})(connect(null, { fetchPlace, fetchPlaces })(Home));
