import PatientList from 'components/patient-list';
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
  return {};
}

const PatientListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientList);

export default PatientListContainer;
