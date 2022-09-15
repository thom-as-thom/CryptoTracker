import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import Button from '../Button';
import Cryptoview from '../CryptoView';
import Header from '../Header';
import {AppRoutes} from '../../navigation/routes';
import {CoinData} from '../../types';

const ListContainer = (): JSX.Element => {
  const Cryptos = useSelector(state => state.addedCryptos.addedCryptos) as [
    CoinData,
  ];
  const navigation = useNavigation();
  const renderItem = ({item}: {item: CoinData}) => <Cryptoview coin={item} />;
  const onClick = () => {
    navigation.navigate('ADD_CRYPTO');
  };

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={<Header />}
        data={Cryptos}
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
    </SafeAreaView>
  );
};
export default ListContainer;
