import React from 'react';
import {Container, HeaderText} from './styles';
import TinyImage from '../TinyImage';

const Header = (): JSX.Element => (
  <Container>
    <HeaderText>CryptoTracker Pro</HeaderText>
    <TinyImage
      imgUrl={
        'https://firebasestorage.googleapis.com/v0/b/nocountry-c6-g21.appspot.com/o/brand%20image%206.jpg?alt=media&token=192deaea-ca2e-49b1-983d-0675a48d3c1a'
      }
    />
  </Container>
);

export default Header;
