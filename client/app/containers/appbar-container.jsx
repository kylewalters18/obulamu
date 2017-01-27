import Appbar from 'components/appbar';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
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
