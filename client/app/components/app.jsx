import React, { PropTypes } from 'react';

import PatientFilterContainer from 'containers/patient-filter-container';
import PatientListContainer from 'containers/patient-list-container';

class App extends React.Component {

  componentDidMount() {
    this.props.loadPatients();
  }

  render() {
    return (
      <div>
        <h1>Medical Charting</h1>
        <br />
        <PatientFilterContainer />
        <br />
        <PatientListContainer />
      </div>
    );
  }
}

App.propTypes = {
  loadPatients: PropTypes.func.isRequired,
};

export default App;
