import React, { PropTypes } from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';

import AppbarContainer from 'containers/appbar-container';
import NotesListContainer from 'containers/notes-list-container';
import NewNoteContainer from 'containers/new-note-container';

const Patient = props => (
  <div>
    <AppbarContainer />
    <Card>
      <CardHeader
        title={`${props.firstName} ${props.lastName} ${props.id}`}
        subtitle={props.address}
      />
      <CardText />
    </Card>
    {/*}
    <NewNoteContainer />
    <NotesListContainer />
    */}
  </div>
);

Patient.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Patient;
