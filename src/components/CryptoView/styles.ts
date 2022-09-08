import styled from 'styled-components/native';

export const CryptoContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin: 0px 28px;
  padding: 28px 0px;
  align-items: center;
  border-bottom-color: #dedede;
  border-style: solid;
  border-bottom-width: 1px;
`;
export const NameView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CryptoName = styled.View`
  flex-direction: column;
`;

export const Bold = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: black;
`;
export const StatsView = styled.View`
  align-items: flex-end;
`;
export const Change = styled.Text`
  color: ${props => props.inputColor};
`;
