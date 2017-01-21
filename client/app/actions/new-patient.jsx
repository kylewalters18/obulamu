import axios from 'axios';
import { loadPatients } from 'actions/patient';
import makeActionCreator from 'actions/util';

export const setFirstName = makeActionCreator('SET_FIRST_NAME', 'firstName');
export const setLastName = makeActionCreator('SET_LAST_NAME', 'lastName');
export const beginAddPatient = makeActionCreator('ADD_NEW_PATIENT');

export const addPatient = (firstName, lastName) => (dispatch) => {
  dispatch(beginAddPatient());

  axios
    .post(`${process.env.API_URL}/patients/`, {
      first_name: firstName,
      last_name: lastName,
      age: 30,
      dob: '1987-03-05',
      medications: [],
      visits: [],
      treatments: [],
    })
    .then(() => dispatch(loadPatients()));
};
