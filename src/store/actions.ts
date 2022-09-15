export const ADD_CRYPTO = 'ADD_CRYPTO';
export const DELETE_CRYPTO = 'DELETE_CRYPTO';

export const addCrypto = (Key, addedCryptos) => {
  return async dispatch => {
    try {
      const resp = await fetch(
        `https://data.messari.io/api/v1/assets/${Key}/metrics/market-data`,
      );
      if (resp.ok) {
        const ResJson = await resp.json();
        const Found = addedCryptos.filter(
          item => item.Asset.id === ResJson.data.Asset.id,
        );
        if (Found.length > 0) {
          alert(`${Found[0].Asset.name} is already in your list.`);
        } else {
          dispatch({type: ADD_CRYPTO, payload: ResJson.data});
        }
      } else {
        alert(`We cant find ${Key}, are you sure it's spelled this way?`);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteCrypto: Function = (Key, Cryptos) => {
  const NewList = Cryptos.filter(item => item.Asset.id !== Key);
  return dispatch => {
    dispatch({type: DELETE_CRYPTO, payload: NewList});
  };
};
