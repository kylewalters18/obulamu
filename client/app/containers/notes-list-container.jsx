import NotesList from 'components/notes-list';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

const NotesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesList);

export default NotesListContainer;
