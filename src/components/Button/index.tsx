import React, {FC} from 'react';
import {Props} from '../../types';
import theme from '../../theme';

import {RegularTitle, Title, Touchable, YellowTouchable} from './styles';

const Button: FC<Props> = ({text, onClick, type, disabled}) => {
  return type === 'navigation' ? (
    <Touchable onPress={onClick}>
      <Title> {text} </Title>
    </Touchable>
  ) : (
    <YellowTouchable onPress={onClick} disabled={disabled}>
      <RegularTitle color={disabled ? theme.colors.grey : theme.colors.blue}>
        {text}
      </RegularTitle>
    </YellowTouchable>
  );
};

export default Button;
