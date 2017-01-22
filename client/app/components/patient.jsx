import React, { PropTypes } from 'react';

import AppBar from 'material-ui/AppBar';

const Patient = props => (
  <div>
    <AppBar
      title="Obulamu"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    <h1>{props.firstName} {props.lastName}</h1>
    <h3>Address: {props.address}</h3>
    <h3>Date of Birth: {props.dob}</h3>
  </div>
);

Patient.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
};

export default Patient;
