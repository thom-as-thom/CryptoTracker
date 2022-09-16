import React from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import Cryptoview from '../../components/CryptoView';
import Header from '../../components/Header';
import {IRootState} from '../../store';
import {updateCurrencies} from '../../store/actions';
import {CoinData} from '../../types';

const Home = ({navigation}): JSX.Element => {
  const Cryptos = useSelector(
    (state: IRootState) => state.addedCryptos.addedCryptos,
  ) as [CoinData];
  const dispatch = useDispatch();
  const renderItem = ({item}: {item: CoinData}) => <Cryptoview coin={item} />;
  const onClick = () => {
    navigation.navigate('ADD_CRYPTO');
  };
  const update = () => {
    dispatch(updateCurrencies());
    console.log(Cryptos[0].market_data.price_usd);
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
      <TouchableOpacity onPress={update}>
        <Text>Update</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Home;
