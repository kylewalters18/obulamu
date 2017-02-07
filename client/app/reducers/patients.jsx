const patients = (state = {
  patients: [],
  filter: '',
  curPatient: 0,
}, action) => {
  switch (action.type) {
    case 'RECEIVE_PATIENTS':
      return { ...state, patients: action.patients };
    case 'UPDATE_PATIENT_FILTER':
      return { ...state, filter: action.filter.toLowerCase().trim() };
    case 'UPDATE_CURRENT_PATIENT':
      return { ...state, curPatient: action.curPatient };
    default:
      return state;
  }
};

export default patients;
