import {ADD_CRYPTO, DELETE_CRYPTO, UPDATE_CURRENCIES} from './actions';

const initialState = {
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
    const currencies = state.addedCryptos;
    const updateList = (curr, updatedCurrencies) => {
      curr.forEach(elem => updateData(elem, updatedCurrencies));
    };
    const updateData = (object, array) => {
      const newObject = array.filter(item => item.id === object.Asset.id);
      object.market_data = newObject[0].metrics.market_data;
    };
    updateList(currencies, action.payload);
    return {
      ...state,
      addedCryptos: currencies,
    };
  } else {
    return state;
  }
};
