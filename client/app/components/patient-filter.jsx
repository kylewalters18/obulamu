import React, { PropTypes } from 'react';

import TextField from 'material-ui/TextField';

const PatientFilter = props => (
  <div>
    <TextField
      floatingLabelText="Search..."
      onKeyUp={event => props.updatePatientFilter(event.target.value)}
    />
  </div>
);

PatientFilter.propTypes = {
  updatePatientFilter: PropTypes.func.isRequired,
};

export default PatientFilter;
