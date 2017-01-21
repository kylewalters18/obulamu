import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const NewPatient = props =>
  <div>
    <TextField
      floatingLabelText="First Name"
      value={props.firstName}
      onChange={event => props.setFirstName(event.target.value)}
    />
    <TextField
      floatingLabelText="Last Name"
      value={props.lastName}
      onChange={event => props.setLastName(event.target.value)}
    />
    <RaisedButton
      label="Add Patient"
      primary
      onClick={() => props.addPatient(props.firstName, props.lastName)}
    />
  </div>;


NewPatient.propTypes = {
  setFirstName: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
  addPatient: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default NewPatient;
