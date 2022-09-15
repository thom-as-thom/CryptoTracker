import {Alert} from 'react-native';

export const ADD_CRYPTO = 'ADD_CRYPTO';
export const DELETE_CRYPTO = 'DELETE_CRYPTO';
export const UPDATE_CURRENCIES = 'UPDATE_CURRENCIES';

export const addCrypto: Function = (Key, addedCryptos) => {
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
          Alert.alert(`${Found[0].Asset.name} is already in your list.`);
        } else {
          dispatch({type: ADD_CRYPTO, payload: ResJson.data});
        }
      } else {
        Alert.alert(`We cant find ${Key}, are you sure it's spelled this way?`);
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

export const updateCurrencies: Function = Cryptos => {
  const getUpdatedCurrencies = async () => {
    const resp = await fetch(
      'https://data.messari.io/api/v2/assets?fields=id,metrics/market_data',
    );
    const ResJson = await resp.json();
    return await ResJson.data;
  };

  const updateList = async currencies => {
    const updatedCurrencies = await getUpdatedCurrencies();
    currencies.forEach(elem => updateData(elem, updatedCurrencies));
  };

  const updateData = async (object, array) => {
    // console.log(array);
    const newObject = array.filter(item => item.id === object.Asset.id);

    object.market_data = newObject[0].metrics.market_data;
  };

  return dispatch => {
    updateList(Cryptos);
    //console.log(Cryptos[0].market_data.price_usd);
    dispatch({type: UPDATE_CURRENCIES, payload: Cryptos});
  };
};
