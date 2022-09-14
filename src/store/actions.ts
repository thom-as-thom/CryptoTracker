export const ADD_CRYPTO = 'ADD_CRYPTO';

export const addCrypto = Key => {
  return async dispatch => {
    try {
      const resp = await fetch(
        `https://data.messari.io/api/v1/assets/${Key}/metrics/market-data`,
      );
      const ResJson = await resp.json();
      dispatch({type: ADD_CRYPTO, payload: ResJson.data});
    } catch (err) {
      console.log(err);
    }
  };
};
