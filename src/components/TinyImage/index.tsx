import React from 'react';
import {TinyLogo} from './styles';

const TinyImage = ({imgUrl}: {imgUrl: string}): JSX.Element => (
  <TinyLogo
    source={{
      uri: imgUrl,
    }}
  />
);

export default TinyImage;
