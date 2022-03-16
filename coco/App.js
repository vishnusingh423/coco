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



// import {Provider} from 'react-redux';
// import {store} from './src/redux/store';

import { createStore,applyMiddleware,compose,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Home1 from './src/TestingPad/Compo/Home1';
import FetchReducer from './src/TestingPad/Redux/Reducer/FetchReducer'
import SetAtoZreducer from './src/redux/SetAtoZreducer';
const materReduer= combineReducers({
    fetchData:FetchReducer,
    dataAtoZ:SetAtoZreducer
})

const store = createStore(materReduer,{fetchData:[] ,dataAtoZ:[]}, applyMiddleware(thunk));

const App = () => {

  return (
    <Provider store={store}>
     <NavigatorScreen/>
    </Provider>
  );
};

export default App;
