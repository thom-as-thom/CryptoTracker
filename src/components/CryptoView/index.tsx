import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import TinyImage from '../TinyImage';
import theme from '../../theme';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {CoinData} from '../../types';
import {
  CryptoContainer,
  NameView,
  CryptoName,
  Bold,
  StatsView,
  Change,
  ChangePercentage,
} from './styles';
import {deleteCrypto} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';

const Cryptoview: FC<CoinData> = coin => {
  const dispatch = useDispatch();
  const Cryptos: CoinData = useSelector(
    state => state.addedCryptos.addedCryptos,
  );
  const deleteCoin = () => {
    dispatch(deleteCrypto(coin.Asset.id, Cryptos));
  };

  return (
    <Pressable onPress={deleteCoin}>
      <CryptoContainer>
        <NameView>
          <TinyImage
            imgUrl={`https://messari.io/asset-images/${coin.Asset.id}/128.png`}
          />
          <CryptoName>
            <Bold> {coin.Asset.name} </Bold>
            <Text> {coin.Asset.symbol} </Text>
          </CryptoName>
        </NameView>
        <StatsView>
          <Bold> ${coin.market_data.price_usd.toFixed(2)} </Bold>
          <Change>
            {coin.market_data.percent_change_usd_last_24_hours > 0 ? (
              <MaterialIcon
                name="call-made"
                size={18}
                color={theme.colors.green}
              />
            ) : (
              <MaterialIcon
                name="call-received"
                size={18}
                color={theme.colors.red}
              />
            )}
            <ChangePercentage
              inputColor={
                coin.market_data.percent_change_usd_last_24_hours > 0
                  ? theme.colors.green
                  : theme.colors.red
              }>
              {Math.abs(
                coin.market_data.percent_change_usd_last_24_hours.toFixed(2),
              )}
              %
            </ChangePercentage>
          </Change>
        </StatsView>
      </CryptoContainer>
    </Pressable>
  );
};

export default Cryptoview;
