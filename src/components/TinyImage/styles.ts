import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const TinyLogo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  margin-right: ${Platform.OS === 'android' ? '-10px' : '10px'};
  align-self: center;
`;
