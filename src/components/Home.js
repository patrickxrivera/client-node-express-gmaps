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
  handleFormSubmit = async ({ search, place }) => {
    const { fetchPlace, fetchPlaces, results, history } = this.props;

    if (place) {
      await fetchPlace(search);
      history.push('/results/place');
      return;
    }

    await fetchPlaces(search);
    history.push('/results/places');
  };

  render() {
    const { handleSubmit, fields: { search }, errorMsg } = this.props;

    return (
      <StyledCard>
        <Title>Places.io</Title>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <FieldWrapper>
            <Field
              autoFocus={true}
              name="search"
              component={TextField}
              fullWidth={true}
              hintText="Search"
              style={fieldStyle}
            />
          </FieldWrapper>
          <ButtonWrapper>
            <RaisedButton
              onClick={handleSubmit((values) =>
                this.handleFormSubmit({ ...values, place: false })
              )}
              type="submit"
              primary={true}
              label="Search"
            />
            <RaisedButton
              onClick={handleSubmit((values) =>
                this.handleFormSubmit({ ...values, place: true })
              )}
              type="submit"
              label="I'm feeling lucky"
            />
          </ButtonWrapper>
        </form>
      </StyledCard>
    );
  }
}

export default reduxForm({
  form: 'search',
  fields: ['search']
})(connect(null, { fetchPlace, fetchPlaces })(Home));
