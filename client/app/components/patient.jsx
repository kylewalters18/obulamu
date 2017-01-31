import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

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
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText>
      </CardText>
    </Card>
    {/*
    <NewNoteContainer />
    <NoteListContainer />
    */}
  </div>
);

Patient.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default Patient;
