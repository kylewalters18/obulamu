import axios from 'axios';
import { loadPatients } from 'actions/patient';
import makeActionCreator from 'actions/util';

export const updateFirstName = makeActionCreator('UPDATE_FIRST_NAME', 'firstName');
export const updateLastName = makeActionCreator('UPDATE_LAST_NAME', 'lastName');
export const updateAddress = makeActionCreator('UPDATE_ADDRESS', 'address');
export const updateDOB = makeActionCreator('UPDATE_DOB', 'dob');

export const beginAddPatient = makeActionCreator('ADD_NEW_PATIENT');

export const addPatient = (firstName, lastName, address, dob) => (dispatch) => {
  dispatch(beginAddPatient());

  axios
    .post(`${process.env.API_URL}/patients/`, {
      first_name: firstName,
      last_name: lastName,
      address,
      dob,
      medications: [],
      visits: [],
      treatments: [],
      notes: [],
    })
    .then(() => dispatch(loadPatients()))
    .catch(error => console.log(error));
};
