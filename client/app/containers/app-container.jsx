import { loadPatients, setPatientFilter } from 'actions';

import App from 'components/app';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    patients: state.patients.patients.filter(
      d =>
        d.first_name.toLowerCase().includes(state.patients.filter) ||
        d.last_name.toLowerCase().includes(state.patients.filter)
    ),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadPatients: () => dispatch(loadPatients()),
    setPatientFilter: filter => dispatch(setPatientFilter(filter)),
  };
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
