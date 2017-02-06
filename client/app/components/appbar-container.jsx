import Appbar from 'components/appbar';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

const AppbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Appbar);

export default AppbarContainer;
