import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import store from '../../store';
import {updateCurrencies} from '../../store/actions';
import Button from '../Button';
import Cryptoview from '../CryptoView';
import Header from '../Header';

const ListContainer = (): JSX.Element => {
  const navigation = useNavigation();
  const cryptos = useSelector(state => state.addedCryptos.addedCryptos);
  const dispatch = useDispatch();
  const renderItem = ({item}) => <Cryptoview coin={item} />;
  const onClick = () => {
    navigation.navigate('AddCurrency');
  };

  const update = () => {
    updateCurrencies(cryptos);
    if (cryptos.length > 0) {
      console.log(cryptos[0].market_data.price_usd);
    }
  };

  // setInterval(() => {
  //   update();
  // }, 8000);

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={<Header />}
        data={cryptos}
        keyExtractor={item => item.Asset.id}
        renderItem={renderItem}
        ListFooterComponent={
          <Button
            text="+Add a Cryptocurrency"
            onClick={onClick}
            type="navigation"
          />
        }
      />
      <TouchableOpacity onPress={update}>
        <Text>update</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default ListContainer;
