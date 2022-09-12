import React, {FC} from 'react';
import {Props} from '../../types';

import {Title, Touchable} from './styles';

const Button: FC<Props> = ({text}) => (
  <Touchable>
    <Title> {text} </Title>
  </Touchable>
);

export default Button;
