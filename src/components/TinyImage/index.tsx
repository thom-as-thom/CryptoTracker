import React, {FC, ReactElement} from 'react';
import {TinyLogo} from './styles';
import {Props} from '../../types';

const TinyImage: FC<Props> = ({imgUrl}): ReactElement => (
  <TinyLogo
    source={{
      uri: imgUrl,
    }}
  />
);

export default TinyImage;
