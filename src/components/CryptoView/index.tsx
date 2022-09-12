import React from 'react';
import {Text} from 'react-native';
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

const Cryptoview = ({coin}: {coin: CoinData}): JSX.Element => (
  <CryptoContainer>
    <NameView>
      <TinyImage imgUrl={coin.imgUrl} />
      <CryptoName>
        <Bold> {coin.name} </Bold>
        <Text> {coin.symbol} </Text>
      </CryptoName>
    </NameView>
    <StatsView>
      <Bold> ${coin.price_usd} </Bold>

      <Change>
        {coin.percent_change_usd_last_24_hours > 0 ? (
          <MaterialIcon name="call-made" size={18} color={theme.colors.green} />
        ) : (
          <MaterialIcon
            name="call-received"
            size={18}
            color={theme.colors.red}
          />
        )}

        <ChangePercentage
          inputColor={
            coin.percent_change_usd_last_24_hours > 0
              ? theme.colors.green
              : theme.colors.red
          }>
          {Math.abs(coin.percent_change_usd_last_24_hours)}%
        </ChangePercentage>
      </Change>
    </StatsView>
  </CryptoContainer>
);

export default Cryptoview;
