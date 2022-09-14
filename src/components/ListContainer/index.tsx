import {useNavigation} from '@react-navigation/native';
import React, {ReactElement} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import Button from '../Button';
import Cryptoview from '../CryptoView';
import Header from '../Header';

const ListContainer = (): ReactElement => {
  const Cryptos = useSelector(state => state.addedCryptos);
  const criptos = Cryptos.addedCryptos;
  const navigation = useNavigation();
  const renderItem = ({item}) => <Cryptoview coin={item} />;
  const onClick = () => {
    navigation.navigate('AddCurrency');
  };

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={<Header />}
        data={criptos}
        keyExtractor={item => item.market_data.id}
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
