import {Platform} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Input = styled.TextInput`
  font-size: 17px;
  border-color: ${props => props.borderColor};
  border-width: 2px;
  padding: 14px;
  margin-horizontal: 7.5%;
  margin-vertical: -10px;
  border-radius: 2px;
  vertical-alignment: center;
  width: 85%;
`;

export const ScreenView = styled.View`
  display: flex;
  justify-content: space-between;
  justify-self: center;
  height: 60%;
`;

export const Navigation = styled.View`
  display: flex;
  align-self: flex-start;
  justify-self: center;
  height: 57%;
  margin: -5%;
  margin-top: ${Platform.OS === 'ios' ? '5%' : '-5%'};
`;

export const Form = styled.View`
  display: flex;
  align-items: flex-end;
  justify-self: center;
`;

export const Title = styled.Text`
  color: ${theme.colors.black}
  font-size: 23px;
  font-weight: bold;
  margin-vertical: 40px;
  margin-horizontal: 7.5%
  align-self: flex-start;
`;
