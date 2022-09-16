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
      const newList = curr.map(elem => updateData(elem, updatedCurrencies));
      return newList;
    };
    const updateData = (object, array) => {
      const sameCoin = array.filter(item => item.id === object.Asset.id);
      if (sameCoin.length !== 0) {
        const crypto = {
          Asset: object.Asset,
          market_data: sameCoin[0].metrics.market_data,
        };
        return crypto;
      } else {
        return object;
      }
    };
    const updatedList = updateList(currencies, action.payload);
    return {
      ...state,
      addedCryptos: updatedList,
    };
  } else {
    return state;
  }
};
