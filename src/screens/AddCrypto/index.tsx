import React from 'react';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {Form, Input, Navigation, ScreenView, Title} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {addCrypto} from '../../store/actions';
import theme from '../../theme';

export const AddCurrency = (): JSX.Element => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {addedCryptos} = useSelector(state => state.addedCryptos);
  const [Search, setSearch] = useState('');
  const [Focus, setFocus] = useState(false);
  const onNavigation = () => {
    navigation.navigate('home');
  };
  const onSearch = () => {
    dispatch(addCrypto(Search, addedCryptos));
    setFocus(false);
    setSearch('');
    navigation.navigate('home');
  };
  const handleFocus = () => {
    setFocus(!Focus);
  };
  return (
    <ScreenView>
      <Navigation>
        <Button
          text="< Back to list"
          onClick={onNavigation}
          type="navigation"
        />
      </Navigation>
      <Form>
        <Title>Add a Cryptocurrency</Title>
        <Input
          placeholder="Use a name or ticker symbol"
          onChangeText={setSearch}
          autoCapitalize="characters"
          onFocus={handleFocus}
          onblur={handleFocus}
          borderColor={Focus ? theme.colors.yellow : theme.colors.grey}
          value={Search}
        />
        <Button
          text="Add"
          type="regular"
          disabled={Search.length === 0}
          onClick={onSearch}
        />
      </Form>
    </ScreenView>
  );
};
