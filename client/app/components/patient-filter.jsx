import React, { PropTypes } from 'react';

class PatientFilter extends React.Component {

  render() {
    return (
      <div>
        Search
        <input type="text" onKeyUp={event => this.props.setPatientFilter(event.target.value)} />
      </div>
    );
  }
}

PatientFilter.propTypes = {
  setPatientFilter: PropTypes.func.isRequired,
};

export default PatientFilter;
