import {ADD_CRYPTO} from './actions';

const initialState = {
  addedCryptos: [],
};

export default (state = initialState, action) => {
  if (action.type === ADD_CRYPTO) {
    return {
      ...state,
      addedCryptos: [...state.addedCryptos, action.payload],
    };
  } else {
    return state;
  }
};
