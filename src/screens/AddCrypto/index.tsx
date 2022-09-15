import React from 'react';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {Form, Input, Navigation, ScreenView, Title} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {addCrypto} from '../../store/actions';
import theme from '../../theme';
import {AppRoutes} from '../../navigation/routes';

export const AddCurrency = (): JSX.Element => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {addedCryptos} = useSelector(state => state.addedCryptos);
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(false);
  const onNavigation = () => {
    navigation.navigate(AppRoutes.HOME);
  };
  const onSearch = () => {
    dispatch(addCrypto(search, addedCryptos));
    setFocus(false);
    setSearch('');
    navigation.navigate(AppRoutes.HOME);
  };
  const handleFocus = () => {
    setFocus(!focus);
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
          borderColor={focus ? theme.colors.yellow : theme.colors.grey}
          value={search}
        />
        <Button
          text="Add"
          type="regular"
          disabled={search.length === 0}
          onClick={onSearch}
        />
      </Form>
    </ScreenView>
  );
};
