import styled from 'styled-components/native';
import theme from '../../theme';

export const Touchable = styled.TouchableOpacity`
  align-self: center;
  margin: 42px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${theme.colors.blue};
`;

export const YellowTouchable = styled.TouchableOpacity`
  background-color: ${theme.colors.yellow};
  border-radius: 3px;
  margin-horizontal: 8%;
  margin-vertical: 30px;
  padding-horizontal: 65px;
  padding-vertical: 13px;
`;

export const RegularTitle = styled.Text`
  font-size: 17px;
  color: ${props => props.color};
  font-weight: bold;
`;
