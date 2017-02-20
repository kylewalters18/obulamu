import {
  addNote,
  updateNewNote,
  updateNewNoteDateTime,
  updateNewNoteDate,
  updateNewNoteTime,
} from 'actions/new-note';

import NewNote from 'components/new-note';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    newNote: state.newNote.newNote,
    newNoteDateTime: state.newNote.newNoteDateTime,
    newNoteDate: state.newNote.newNoteDate,
    newNoteTime: state.newNote.newNoteTime,
    newNotePatient: state.newNote.patient,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewNote: newNote => dispatch(updateNewNote(newNote)),
    updateNewNoteDateTime: newNoteDateTime => dispatch(updateNewNoteDateTime(newNoteDateTime)),
    updateNewNoteDate: newNoteDate => dispatch(updateNewNoteDate(newNoteDate)),
    updateNewNoteTime: newNoteTime => dispatch(updateNewNoteTime(newNoteTime)),
    addNote: (newNote, newNoteDate, newNoteTime) =>
      dispatch(addNote(newNote, newNoteDate, newNoteTime)),
  };
}

const NewNoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote);

export default NewNoteContainer;
