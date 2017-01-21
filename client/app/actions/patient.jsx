import axios from 'axios';
import makeActionCreator from 'actions/util';

export const setPatientFilter = makeActionCreator('SET_PATIENT_FILTER', 'filter');

const receivePatients = makeActionCreator('RECEIVE_PATIENTS', 'patients');
export const loadPatients = () => (dispatch) => {
    // async call to get the new data
  axios
    .get(`${process.env.API_URL}/patients/`, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    })
    .then(response => dispatch(receivePatients(response.data)));
};
