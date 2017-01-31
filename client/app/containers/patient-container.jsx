import Patient from 'components/patient';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  const patient = state.patients.patients.find(d => d.id === Number(ownProps.params.id));

  return {
    firstName: patient.first_name,
    lastName: patient.last_name,
    dob: patient.DOB,
    address: patient.address,
    id: patient.id,
  };
}

function mapDispatchToProps() {
  return {};
}

const PatientContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Patient);

export default PatientContainer;
