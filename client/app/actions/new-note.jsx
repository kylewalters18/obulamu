import axios from 'axios';
import { loadNotes } from 'actions/note';
import makeActionCreator from 'actions/util';

export const updateNewNote = makeActionCreator('UPDATE_NEW_NOTE', 'newNote');

export const beginAddNote = makeActionCreator('ADD_NEW_NOTE');

export const addNote = (newNote, getState) => (dispatch) => {
  dispatch(beginAddNote());
  const state = getState();
  const curPatient = state.curPatient;
  const noteDateTime = state.noteDateTime;
  axios
    .post(`${process.env.API_URL}/notes/`, {
      datetime: noteDateTime,
      note: newNote,
      patient: curPatient,
    })
    .then(() => dispatch(loadNotes()))
    .catch(error => console.log(error));
};
