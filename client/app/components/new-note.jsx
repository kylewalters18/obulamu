import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

const NewNote = props =>
  <div>
    <TextField
      floatingLabelText="new note"
      value={props.newNote}
      fullWidth={true}
      multiLine={true}
      rows={4}
      onChange={event => props.updateNewNote(event.target.value)}
    />
    <DatePicker
      hintText="note date"
      mode="landscape"
      onFocus={(event, date) => props.updateNewNoteDate(date)}
      onChange={(event, date) => props.updateNewNoteDate(date)}
    />
    <TimePicker
      format="24hr"
      hintText="note time"
      onFocus={(event, time) => props.updateNewNoteTime(time)}
      onChange={(event, time) => props.updateNewNoteTime(time)}
    />
    <br />
    <RaisedButton
      label="Add Note"
      primary
      value={props.newNote}
      onClick={() => props.addNote(
        props.newNote,
        props.newNoteDate,
        props.newNoteTime,
      )}
    />
  </div>;


NewNote.propTypes = {
  updateNewNote: PropTypes.func.isRequired,
  updateNewNoteDate: PropTypes.func.isRequired,
  updateNewNoteTime: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
  newNote: PropTypes.string.isRequired,
  newNoteDate: PropTypes.string.isRequired,
  newNoteTime: PropTypes.string.isRequired,
};

export default NewNote;
