import axios from 'axios';
import { loadNotes } from 'actions/note';
import makeActionCreator from 'actions/util';

export const updateNewNote = makeActionCreator('UPDATE_NEW_NOTE', 'newNote');
export const updateNoteDateTime = makeActionCreator('UPDATE_NEW_NOTE_DATE_TIME', 'newNoteDateTime');
export const beginAddNote = makeActionCreator('ADD_NEW_NOTE');

export const addNote = (newNote, newNoteDateTime, curPatient) => (dispatch) => {
  dispatch(beginAddNote());
  axios
    .post(`${process.env.API_URL}/patients/${curPatient}/notes/`, {
      note: newNote,
      datetime: newNoteDateTime,
      patient: curPatient,
    })
    .then(() => dispatch(loadNotes()))
    .catch(error => console.log(error));
};
