import React, { PropTypes } from 'react';

class App extends React.Component {

  componentDidMount() {
    this.props.loadPatients();
  }

  render() {
    return (
      <div>
        <h1>Medical Charting</h1>
        <br />
        {this.props.patients.map((d, i) =>
          <div key={i}>{d.first_name} {d.last_name}, {d.age}</div>
        )}
      </div>
    );
  }
}

App.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadPatients: PropTypes.func.isRequired,
};

export default App;
