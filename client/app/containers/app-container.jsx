import App from 'components/app';
import { connect } from 'react-redux';
import { loadPatients } from 'actions/patient';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    loadPatients: () => dispatch(loadPatients()),
  };
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
