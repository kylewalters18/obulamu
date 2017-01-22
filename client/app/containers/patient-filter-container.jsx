import PatientFilter from 'components/patient-filter';
import { connect } from 'react-redux';
import { updatePatientFilter } from 'actions/patient';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    updatePatientFilter: filter => dispatch(updatePatientFilter(filter)),
  };
}

const PatientFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientFilter);

export default PatientFilterContainer;
