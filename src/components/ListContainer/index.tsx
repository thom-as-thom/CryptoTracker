import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import Button from '../Button';
import Cryptoview from '../CryptoView';
import Header from '../Header';
import {AppRoutes} from '../../navigation/routes';

<<<<<<< HEAD
const ListContainer = (): JSX.Element => {
  const Cryptos = useSelector(state => state.addedCryptos.addedCryptos);
  const navigation = useNavigation();
=======
const ListContainer = (): ReactElement => {
  const [Cryptos, setCryptos] = useState([]);

  useEffect(() => {
    async () => {
      try {
        const resp = await fetch(
          'https://data.messari.io/api/v2/assets?fields=id,name,slug,symbol,metrics/market_data',
        );
        const ResJson = await resp.json();
        setCryptos(ResJson.data);
      } catch (err) {
        console.log(err);
      }
    };
  }, [Cryptos]);

>>>>>>> main
  const renderItem = ({item}) => <Cryptoview coin={item} />;
  const onClick = () => {
    navigation.navigate(AppRoutes.ADD_CRYPTO);
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
