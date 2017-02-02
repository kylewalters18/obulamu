import {
  addNote,
  updateNewNote,
} from 'actions/new-note';

import NewNote from 'components/new-note';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    newNote: state.newNote.note,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNewNote: newNote => dispatch(updateNewNote(newNote)),
    addNote: (newNote, patient) =>
      dispatch(addNote(newNote, patient)),
  };
}

const NewNoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote);

export default NewNoteContainer;
