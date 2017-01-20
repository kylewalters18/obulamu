import React, { PropTypes } from 'react';

class Patient extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.firstName} {this.props.lastName}</h1>
      </div>
    );
  }
}

Patient.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Patient;
