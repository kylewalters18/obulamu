import PatientFilter from 'components/patient-filter';
import { connect } from 'react-redux';
import { setPatientFilter } from 'actions';

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
    setPatientFilter: filter => dispatch(setPatientFilter(filter)),
  };
}

const PatientFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientFilter);

export default PatientFilterContainer;
