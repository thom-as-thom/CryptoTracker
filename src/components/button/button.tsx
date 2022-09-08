import React from 'react';

import {Title, Touchable} from './styles';

type prop = {
  text: string;
};

const Button = (props: prop) => (
  <Touchable>
    <Title> {props.text} </Title>
  </Touchable>
);

export default Button;
