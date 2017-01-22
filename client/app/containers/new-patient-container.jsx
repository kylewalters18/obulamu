import {
  addPatient,
  updateAddress,
  updateDOB,
  updateFirstName,
  updateLastName,
} from 'actions/new-patient';

import NewPatient from 'components/new-patient';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    firstName: state.newPatient.firstName,
    lastName: state.newPatient.lastName,
    address: state.newPatient.address,
    dob: state.newPatient.dob,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateFirstName: firstName => dispatch(updateFirstName(firstName)),
    updateLastName: lastName => dispatch(updateLastName(lastName)),
    updateAddress: address => dispatch(updateAddress(address)),
    updateDOB: dob => dispatch(updateDOB(dob)),
    addPatient: (firstName, lastName, address, dob) =>
      dispatch(addPatient(firstName, lastName, address, dob)),
  };
}

const NewPatientContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPatient);

export default NewPatientContainer;
