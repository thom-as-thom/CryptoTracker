import React, {FC} from 'react';
import {TinyLogo} from './styles';
import {Props} from '../../types';

const TinyImage: FC<Props> = ({imgUrl}) => (
  <TinyLogo
    source={{
      uri: imgUrl,
    }}
  />
);

export default TinyImage;
