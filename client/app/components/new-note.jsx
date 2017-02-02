import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const NewNote = props =>
  <div>
    <TextField
      floatingLabelText="new note"
      value={props.newNote}
      onChange={event => props.updateNewNote(event.target.value)}
    /><br />
    <RaisedButton
      label="Add Note"
      primary
      value={props.newNote}
      onClick={() => props.addNote(
        props.newNote,
        props.currentPatient
      )}
    />
  </div>;


NewNote.propTypes = {
  updateNewNote: PropTypes.func.isRequired,
  updateCurrentPatient: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
  newNote: PropTypes.string.isRequired,
  currentPatient: PropTypes.number.isRequired,
};

export default NewNote;