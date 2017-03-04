import axios from 'axios';
import { loadNotes } from 'actions/note';
import makeActionCreator from 'actions/util';

export const updateNewNote = makeActionCreator('UPDATE_NEW_NOTE', 'newNote');
export const updateNewNoteDate = makeActionCreator('UPDATE_NEW_NOTE_DATE', 'newNoteDate');
export const updateNewNoteTime = makeActionCreator('UPDATE_NEW_NOTE_TIME', 'newNoteTime');
export const updateNewNoteDateTime = makeActionCreator('UPDATE_NEW_NOTE_DATE_TIME', 'newNoteDateTime');
export const beginAddNote = makeActionCreator('ADD_NEW_NOTE');

export const addNote = (newNote, newNoteDate, newNoteTime) => (dispatch, getState) => {
  dispatch(beginAddNote());
  const state = getState();
  const curPatient = state.patients.curPatient;
  axios
    .post(`${process.env.API_URL}/patients/${curPatient}/notes/`, {
      note: newNote,
      datetime: `${newNoteDate}T${newNoteTime}`,
      patient: curPatient,
    })
    .then(() => dispatch(loadNotes()))
    .then(() => dispatch(updateNewNoteDate(Date.now())))
    .then(() => dispatch(updateNewNoteTime(Date.now())))
    .catch(error => console.log(error));
};
