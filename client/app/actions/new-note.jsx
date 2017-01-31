import axios from 'axios';
import { loadNotes } from 'actions/note';
import makeActionCreator from 'actions/util';

export const updateNewNote = makeActionCreator('UPDATE_NEW_NOTE', 'newNote');

export const beginAddNote = makeActionCreator('ADD_NEW_NOTE');

export const addNote = (newNote, currentPatient) => (dispatch) => {
  dispatch(beginAddNote());

  axios
    .post(`${process.env.API_URL}/notes/`, {
      note: newNote,
      patient: currentPatient,
    })
    .then(() => dispatch(loadNotes()))
    .catch(error => console.log(error));
};
