import PatientFilter from 'components/patient-filter';
import { connect } from 'react-redux';
import { setPatientFilter } from 'actions';

function mapStateToProps(state) {
  return {};
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
