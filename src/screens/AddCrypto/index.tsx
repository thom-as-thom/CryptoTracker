import React from 'react';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {Form, Input, Navigation, ScreenView, Title} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {addCrypto} from '../../store/actions';

export const AddCurrency = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {addedCryptos} = useSelector(state => state.addedCryptos);
  const [Search, setSearch] = useState('');
  const onNavigation = () => {
    navigation.navigate('home');
  };
  const onSearch = () => {
    dispatch(addCrypto(Search));
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
        />
        <Button text="Add" type="regular" disabled={true} onClick={onSearch} />
      </Form>
    </ScreenView>
  );
};
