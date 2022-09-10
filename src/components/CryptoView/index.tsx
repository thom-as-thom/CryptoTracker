import React, {ReactElement} from 'react';
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

const Cryptoview = ({coin}: {coin: CoinData}): ReactElement => (
  <CryptoContainer>
    <NameView>
      <TinyImage
        imgUrl={`https://messari.io/asset-images/${coin.id}/128.png`}
      />
      <CryptoName>
        <Bold> {coin.name} </Bold>
        <Text> {coin.symbol} </Text>
      </CryptoName>
    </NameView>
    <StatsView>
      <Bold> ${coin.metrics.market_data.price_usd.toFixed(2)} </Bold>

      <Change>
        {coin.metrics.market_data.percent_change_usd_last_24_hours > 0 ? (
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
            coin.metrics.market_data.percent_change_usd_last_24_hours > 0
              ? theme.colors.green
              : theme.colors.red
          }>
          {Math.abs(
            coin.metrics.market_data.percent_change_usd_last_24_hours.toFixed(
              2,
            ),
          )}
          %
        </ChangePercentage>
      </Change>
    </StatsView>
  </CryptoContainer>
);

export default Cryptoview;
