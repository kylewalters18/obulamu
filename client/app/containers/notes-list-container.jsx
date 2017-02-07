import NotesList from 'components/notes-list';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    notes: state.notes.notes,
  };
}

function mapDispatchToProps() {
  return {};
}

const NotesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesList);

export default NotesListContainer;
