import axios from 'axios';

function makeActionCreator(type, ...argNames) {
  return (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

export const receivePatients = makeActionCreator('RECEIVE_PATIENTS', 'patients');

export function loadPatients() {
  return (dispatch) => {
    // async call to get the new data
    axios.get(`${process.env.API_URL}/patients/`, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    })
    .then(response => dispatch(receivePatients(response.data)));
  };
}
