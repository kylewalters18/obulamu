import axios from 'axios';
import makeActionCreator from 'actions/util';

const receiveNotes = makeActionCreator('RECEIVE_NOTES', 'notes');
export const loadNotes = () => (dispatch) => {
    // async call to get the new data
  axios
    .get(`${process.env.API_URL}/notes/${currentPatient}`, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    })
    .then(response => dispatch(receiveNotes(response.data)));
};
