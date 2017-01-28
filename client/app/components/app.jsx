import React, { PropTypes } from 'react';

import NewPatientContainer from 'containers/new-patient-container';
import PatientFilterContainer from 'containers/patient-filter-container';
import PatientListContainer from 'containers/patient-list-container';
import AppbarContainer from 'containers/appbar-container';

class App extends React.Component {

  componentDidMount() {
    this.props.loadPatients();
  }

  render() {
    return (
      <div>
        <AppbarContainer />
        <br />
        <NewPatientContainer />
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
