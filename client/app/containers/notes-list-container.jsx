import Appbar from 'components/notes-list';
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
)(Appbar);

export default NotesListContainer;
