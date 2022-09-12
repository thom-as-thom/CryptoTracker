import React, {ReactElement} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Button from '../Button';
import Cryptoview from '../CryptoView';
import Header from '../Header';
import {CoinData} from '../../types';

let cryptos: CoinData[] = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price_usd: 19778.51,
    percent_change_usd_last_24_hours: -0.64,
    id: '1',
    imgUrl:
      'https://messari.io/asset-images/1e31218a-e44e-4285-820c-8282ee222035/64.png',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price_usd: 7591.48,
    percent_change_usd_last_24_hours: +1.64,
    id: '2',
    imgUrl:
      'https://messari.io/asset-images/21c795f5-1bfd-40c3-858e-e9d7e820c6d0/64.png',
  },
  {
    name: 'Litecoin',
    symbol: 'LTC',
    price_usd: 654.25,
    percent_change_usd_last_24_hours: -6.64,
    id: '3',
    imgUrl:
      'https://messari.io/asset-images/c7c3697d-1b9c-42bf-9664-a366634ce2b3/64.png',
  },
];

const ListContainer = (): ReactElement => {
  const renderItem = ({item}) => <Cryptoview coin={item} />;

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={<Header />}
        data={cryptos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListFooterComponent={<Button text="+ Add a cryptocurrency" />}
      />
    </SafeAreaView>
  );
};

export default ListContainer;
