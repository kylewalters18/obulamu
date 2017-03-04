import { loadNotes } from 'actions/note';
import { updateNewNoteDate, updateNewNoteTime } from 'actions/new-note';
import Patient from 'components/patient';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  const patient = state.patients.patients.find(d => d.id === Number(ownProps.params.id));
  return {
    firstName: patient.first_name,
    lastName: patient.last_name,
    dob: patient.dob,
    address: patient.address,
    id: patient.id,
    curPatient: state.patients.curPatient,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadNotes: () => dispatch(loadNotes()),
    updateNewNoteDate: (date) => {
      dispatch(updateNewNoteDate(date));
    },
    updateNewNoteTime: (time) => {
      dispatch(updateNewNoteTime(time));
    },
  };
}

const PatientContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Patient);

export default PatientContainer;
