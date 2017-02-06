const curPatient = (state = {
  curPatientId: null,
  filter: '',
}, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_PATIENT':
      return { ...state, curPatient: action.curPatient };
    default:
      return state;
  }
};

export default curPatient;
