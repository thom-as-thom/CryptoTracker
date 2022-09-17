import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  padding-vertical: 18px;
  padding-horizontal: 35px;

  background-color: ${theme.colors.blue};
  margin-bottom: 10px;
  margin-left: -64px;
  margin-top: -20px;
  flex-direction: row;
  justify-content: space-between;
  width: 109%;
`;

export const HeaderText = styled.Text`
  color: ${theme.colors.white};
  font-size: 22px;
  font-weight: bold;
  margin-left: 5px;
  align-self: center;
`;
