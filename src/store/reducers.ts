import {ADD_CRYPTO, DELETE_CRYPTO, UPDATE_CURRENCIES} from './actions';

type state = {
  addedCryptos: any;
};

const initialState: state = {
  addedCryptos: [],
};

export default (state = initialState, action) => {
  if (action.type === ADD_CRYPTO) {
    return {
      ...state,
      addedCryptos: [...state.addedCryptos, action.payload],
    };
  } else if (action.type === DELETE_CRYPTO) {
    return {
      ...state,
      addedCryptos: action.payload,
    };
  } else if (action.type === UPDATE_CURRENCIES) {
    return {
      ...state,
      addedCryptos: action.payload,
    };
  } else {
    return state;
  }
};
