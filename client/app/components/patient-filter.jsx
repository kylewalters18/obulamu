import React, { PropTypes } from 'react';

import TextField from 'material-ui/TextField';

const PatientFilter = props => (
  <div>
    <TextField
      floatingLabelText="Search..."
      onKeyUp={event => props.setPatientFilter(event.target.value)}
    />
  </div>
);

PatientFilter.propTypes = {
  setPatientFilter: PropTypes.func.isRequired,
};

export default PatientFilter;
