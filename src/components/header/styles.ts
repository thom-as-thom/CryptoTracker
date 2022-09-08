import styled from 'styled-components/native';
import theme from '../../theme/theme';

export const Container = styled.View`
  padding: 18px;
  background-color: #38577f;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderText = styled.Text`
  color: ${theme.colors.white};
  font-size: 22px;
  font-weight: bold;
  margin-left: 5px;
  align-self: center;
`;
