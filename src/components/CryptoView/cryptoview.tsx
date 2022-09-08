import React from 'react';
import {Text} from 'react-native';
import TinyImage from '../tinyImage/tinyImage';
import {
  CryptoContainer,
  NameView,
  CryptoName,
  Bold,
  StatsView,
  Change,
} from './styles';

type crypto = {
  name: string;
  symbol: string;
  price_usd: number;
  percent_change_usd_last_24_hours: number;
  id: string;
  imgUrl: string;
};

const Cryptoview = (props: crypto) => (
  <CryptoContainer>
    <NameView>
      <TinyImage imgUrl={props.imgUrl} />
      <CryptoName>
        <Bold> {props.name} </Bold>
        <Text> {props.symbol} </Text>
      </CryptoName>
    </NameView>
    <StatsView>
      <Bold> ${props.price_usd} </Bold>
      <Change
        inputColor={
          props.percent_change_usd_last_24_hours > 0 ? 'green' : 'red'
        }>
        {props.percent_change_usd_last_24_hours}
      </Change>
    </StatsView>
  </CryptoContainer>
);

export default Cryptoview;
