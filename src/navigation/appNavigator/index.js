import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {BottomTabNavigator} from './bottomTabNavigator';
import {NavigationKeys} from '../constants';
import { ProductDetail } from '../../Screens/ProductDetail';
import { CartScreen } from '../../Screens/CartScreen';

const AppStack = createNativeStackNavigator();

export const AppStackNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={NavigationKeys.tab.bottomTab}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <AppStack.Screen
       name={NavigationKeys.screen.ProductDetail}
       component={ProductDetail}
       options={{headerShown: false}}
     />
      <AppStack.Screen
       name={NavigationKeys.screen.CartScreen}
       component={CartScreen}
       options={{headerShown: false}}
     />
    </AppStack.Navigator>
  );
};
