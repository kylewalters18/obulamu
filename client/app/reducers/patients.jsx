const patients = (state = {
  patients: [],
  filter: '',
}, action) => {
  switch (action.type) {
    case 'RECEIVE_PATIENTS':
      return { ...state, patients: action.patients };
    case 'UPDATE_PATIENT_FILTER':
      return { ...state, filter: action.filter.toLowerCase().trim() };
    default:
      return state;
  }
};

export default patients;
