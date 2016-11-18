const patients = (state = {
  patients: [],
}, action) => {
  switch (action.type) {
    case 'RECEIVE_PATIENTS':
      return { ...state, patients: action.patients };
    default:
      return state;
  }
};

export default patients;
