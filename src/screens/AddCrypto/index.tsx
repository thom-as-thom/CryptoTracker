import React from 'react';
import Button from '../../components/Button';
import {Form, Input, Navigation, ScreenView, Title} from './styles';
import {useState} from 'react';
import {addCrypto} from '../../store/actions';
import theme from '../../theme';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';

export const AddCurrency = ({navigation}): JSX.Element => {
  const dispatch = useAppDispatch();
  const {addedCryptos} = useAppSelector(state => state.addedCryptos);
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(false);
  const onNavigation = () => {
    navigation.navigate('HOME');
  };
  const onSearch = () => {
    dispatch(addCrypto(search, addedCryptos));
    setFocus(false);
    setSearch('');
    navigation.navigate('HOME');
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
