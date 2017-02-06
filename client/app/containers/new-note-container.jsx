import {
  addNote,
  updateNewNote,
  updateNewNoteDateTime,
} from 'actions/new-note';

import NewNote from 'components/new-note';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    newNote: state.newNote.newNote,
    newNoteDateTime: state.newNote.newNoteDateTime,
    newNotePatient: state.newNote.patient,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewNote: newNote => dispatch(updateNewNote(newNote)),
    updateNewNoteDateTime: newNoteDateTime => dispatch(updateNewNoteDateTime(newNoteDateTime)),
    addNote: (newNote, newNoteDateTime, newNotePatient) =>
      dispatch(addNote(newNote, newNoteDateTime, newNotePatient)),
  };
}

const NewNoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote);

export default NewNoteContainer;
