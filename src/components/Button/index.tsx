import React from 'react';
import theme from '../../theme';
import {RegularTitle, Title, Touchable, YellowTouchable} from './styles';

const Button = ({
  text,
  onClick,
  type,
  disabled,
}: {
  text: string;
  onClick: Function;
  type: 'regular' | 'navigation';
  disabled?: boolean;
}): JSX.Element =>
  type === 'navigation' ? (
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

export default Button;
