import React, {ReactElement, useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Button from '../Button';
import Cryptoview from '../CryptoView';
import Header from '../Header';
import {CoinData} from '../../types';

const ListContainer = (): ReactElement => {
  const [Cryptos, setCryptos] = useState([]);

  useEffect(() => {
    async () => {
      try {
        const resp = await fetch(
          'https://data.messari.io/api/v2/assets?fields=id,name,slug,symbol,metrics/market_data',
        );
        const ResJson = await resp.json();
        setCryptos(ResJson);
      } catch (err) {
        console.log(err);
      } finally {
        console.log(Cryptos);
      }
    };
  }, [Cryptos]);

  const renderItem = ({item}) => <Cryptoview coin={item} />;

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={<Header />}
        data={Cryptos.data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListFooterComponent={<Button text="+ Add a cryptocurrency" />}
      />
    </SafeAreaView>
  );
};

export default ListContainer;
