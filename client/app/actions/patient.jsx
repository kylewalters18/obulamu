import axios from 'axios';
import makeActionCreator from 'actions/util';

export const updatePatientFilter = makeActionCreator('UPDATE_PATIENT_FILTER', 'filter');

export function updateCurPatient(curPatient) {
  return function (dispatch) {
    dispatch({
      type: 'UPDATE_CURRENT_PATIENT',
      curPatient,
    });
    dispatch({ type: 'UPDATE_NEW_NOTE',
      newNote: '',
    });
  };
}

const receivePatients = makeActionCreator('RECEIVE_PATIENTS', 'patients');
export const loadPatients = () => (dispatch) => {
    // async call to get the new data
  axios
    .get(`${process.env.API_URL}/patients/`, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    })
    .then(response => dispatch(receivePatients(response.data)));
};
