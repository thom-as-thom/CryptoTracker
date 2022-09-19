import React from 'react';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddCurrency} from './src/screens/AddCrypto';
import store from './src/store';
import {AppRoutes} from './src/navigation/routes';
import theme from './src/theme';
import Header from './src/components/Header';

const Stack = createNativeStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: theme.colors.blue},
          headerBackButtonMenuEnabled: false,
          headerTitle: ' ',
        }}>
        <Stack.Screen
          name={AppRoutes.ADD_CRYPTO}
          component={AddCurrency}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={AppRoutes.HOME}
          component={Home}
          options={{headerTitle: () => <Header />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
