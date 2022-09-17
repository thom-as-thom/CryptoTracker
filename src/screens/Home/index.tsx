import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import Button from '../../components/Button';
import Cryptoview from '../../components/CryptoView';
import Header from '../../components/Header';
import {IRootState} from '../../store';
import {CoinData} from '../../types';
import {Container} from './styles';

const Home = ({navigation}): JSX.Element => {
  const Cryptos = useSelector(
    (state: IRootState) => state.addedCryptos.addedCryptos,
  ) as [CoinData];

  const renderItem = ({item}: {item: CoinData}) => <Cryptoview coin={item} />;
  const onClick = () => {
    navigation.navigate('ADD_CRYPTO');
  };

  return (
    <SafeAreaView>
      <Container
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
export default Home;
