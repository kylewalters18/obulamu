import axios from 'axios';
import makeActionCreator from 'actions/util';

const receiveNotes = makeActionCreator('RECEIVE_NOTES', 'notes');
export const loadNotes = () => (dispatch, getState) => {
    // async call to get the new data
  const state = getState();
  const curPatient = state.patients.curPatient;
  axios
    .get(`${process.env.API_URL}/patients/${curPatient}/notes/`, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    })
    .then(response => dispatch(receiveNotes(response.data)));
};
