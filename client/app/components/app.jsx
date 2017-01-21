import React, { PropTypes } from 'react';

import { Link } from 'react-router';

class App extends React.Component {

  componentDidMount() {
    this.props.loadPatients();
  }

  render() {
    return (
      <div>
        <h1>Medical Charting</h1>
        <br />
        Search
        <input type="text" onKeyUp={event => this.props.setPatientFilter(event.target.value)} />
        <br />
        <div>First Name, Last Name, Age</div>
        <ul>
          {this.props.patients.map((d, i) =>
            <li key={i}>
              <Link to={`/patient/${d.id}`}>
                {d.first_name} {d.last_name}, {d.age}
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadPatients: PropTypes.func.isRequired,
  setPatientFilter: PropTypes.func.isRequired,
};

export default App;
