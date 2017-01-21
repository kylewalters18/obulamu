import React, { PropTypes } from 'react';

import AppBar from 'material-ui/AppBar';
import NewPatientContainer from 'containers/new-patient-container';
import PatientFilterContainer from 'containers/patient-filter-container';
import PatientListContainer from 'containers/patient-list-container';

class App extends React.Component {

  componentDidMount() {
    this.props.loadPatients();
  }

  render() {
    return (
      <div>
        <AppBar
          title="Obulamu"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
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
