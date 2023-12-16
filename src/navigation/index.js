import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackNavigator} from './appNavigator';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}
