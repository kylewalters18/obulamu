import React, { PropTypes } from 'react';

const PatientFilter = props => (
  <div>
      Search
      <input type="text" onKeyUp={event => props.setPatientFilter(event.target.value)} />
  </div>
);

PatientFilter.propTypes = {
  setPatientFilter: PropTypes.func.isRequired,
};

export default PatientFilter;
