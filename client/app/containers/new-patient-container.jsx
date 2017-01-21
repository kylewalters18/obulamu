import { addPatient, setFirstName, setLastName } from 'actions/new-patient';

import NewPatient from 'components/new-patient';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    firstName: state.newPatient.firstName,
    lastName: state.newPatient.lastName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFirstName: firstName => dispatch(setFirstName(firstName)),
    setLastName: lastName => dispatch(setLastName(lastName)),
    addPatient: (firstName, lastName) => dispatch(addPatient(firstName, lastName)),
  };
}

const NewPatientContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPatient);

export default NewPatientContainer;
