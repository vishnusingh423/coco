import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Filter,Sort,HomeScreen } from '../Screen';
import NavigationString from './NavigationString';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Text, StyleSheet ,DrawerLayoutAndroid} from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function NavigatorScreen() {
  return (
<>
    <NavigationContainer >
     
      <Stack.Navigator >
       <Stack.Screen options={{headerShown:false}}  name={NavigationString.HOME} component={HomeScreen} />
        <Stack.Screen name={NavigationString.FILTER} component={Filter} />

      </Stack.Navigator>
    </NavigationContainer>
    </>



  );
}

export default NavigatorScreen;