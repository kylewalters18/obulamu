import React, { PropTypes } from 'react';

import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const NewPatient = props =>
  <div>
    <TextField
      floatingLabelText="First Name"
      value={props.firstName}
      onChange={event => props.updateFirstName(event.target.value)}
    /><br />
    <TextField
      floatingLabelText="Last Name"
      value={props.lastName}
      onChange={event => props.updateLastName(event.target.value)}
    />
    <br />
    <TextField
      floatingLabelText="Address"
      value={props.address}
      onChange={event => props.updateAddress(event.target.value)}
    />
    <br />
    <br />
    <DatePicker
      hintText="Date of Birth"
      mode="landscape"
      onChange={(event, date) => props.updateDOB(date)}
    />
    <RaisedButton
      label="Add Patient"
      primary
      value={props.dob}
      onClick={() => props.addPatient(
        props.firstName,
        props.lastName,
        props.address,
        props.dob
      )}
    />
  </div>;


NewPatient.propTypes = {
  updateFirstName: PropTypes.func.isRequired,
  updateLastName: PropTypes.func.isRequired,
  updateAddress: PropTypes.func.isRequired,
  updateDOB: PropTypes.func.isRequired,
  addPatient: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
};

export default NewPatient;
