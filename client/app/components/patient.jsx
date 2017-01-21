import React, { PropTypes } from 'react';

const Patient = props => (
  <div>
    <h1>{props.firstName} {props.lastName}</h1>
  </div>
);

Patient.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Patient;
