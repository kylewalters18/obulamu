const patients = (state = {
  patients: [],
  filter: '',
}, action) => {
  switch (action.type) {
    case 'RECEIVE_PATIENTS':
      return { ...state, patients: action.patients };
    case 'SET_PATIENT_FILTER':
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

export default patients;
