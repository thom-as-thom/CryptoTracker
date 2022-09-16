import React, {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Button from '../../components/Button';
import Cryptoview from '../../components/CryptoView';
import Header from '../../components/Header';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {IRootState} from '../../store';
import {updateCurrencies} from '../../store/actions';
import {CoinData} from '../../types';

const Home = ({navigation}): JSX.Element => {
  const Cryptos = useAppSelector(
    (state: IRootState) => state.addedCryptos.addedCryptos,
  ) as [CoinData];
  const dispatch = useAppDispatch();
  const renderItem = ({item}: {item: CoinData}) => <Cryptoview coin={item} />;
  const onClick = () => {
    navigation.navigate('ADD_CRYPTO');
  };
  const update = () => {
    if (Cryptos.length > 0) {
      dispatch(updateCurrencies());
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => update(), 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
export default Home;
