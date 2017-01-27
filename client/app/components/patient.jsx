import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import AppbarContainer from 'containers/appbar-container';

const Patient = props => (
  <div>
    <AppbarContainer />
    <Card>
      <CardHeader
        title={props.firstName + " " + props.lastName}
        subtitle={props.address}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText>
      </CardText>
    </Card>
    <RaisedButton
      label="Add Note"
      primary
    />
    <RaisedButton
      label="Add Vitals"
      primary
    />
  </div>
);

Patient.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
};

export default Patient;
