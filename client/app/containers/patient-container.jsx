import Patient from 'components/patient';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  const patient = state.patients.patients.find(d => d.id === Number(ownProps.params.id));

  return {
    firstName: patient.first_name,
    lastName: patient.last_name,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const PatientContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Patient);

export default PatientContainer;
