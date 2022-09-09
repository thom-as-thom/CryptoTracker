import React, {FC, ReactElement} from 'react';
import {Props} from '../../types';

import {Title, Touchable} from './styles';

const Button: FC<Props> = ({text}): ReactElement => (
  <Touchable>
    <Title> {text} </Title>
  </Touchable>
);

export default Button;
