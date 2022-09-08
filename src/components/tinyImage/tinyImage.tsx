import React from 'react';
import {TinyLogo} from './styles';

const TinyImage = (props: any) => (
  <TinyLogo
    source={{
      uri: props.imgUrl,
    }}
  />
);

export default TinyImage;
