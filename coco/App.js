import React, {useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigatorScreen from './src/components/NavigatorScreen/NavigatorScreen';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  DrawerLayoutAndroid,
} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <NavigatorScreen />
    </Provider>
  );
};

export default App;
