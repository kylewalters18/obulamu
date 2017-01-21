import React, { PropTypes } from 'react';

import { Link } from 'react-router';

class App extends React.Component {

  render() {
    return (
      <div>
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
};

export default App;
