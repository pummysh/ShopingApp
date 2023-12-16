import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../../../Screens/Home';
import {Categories} from '../../../Screens/Categories';
import {Favourite} from '../../../Screens/Favourite';
import {MoreOption} from '../../../Screens/MoreOption';
import { NavigationKeys } from '../../constants';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => (
  <BottomTab.Navigator screenOptions={{headerShown:false}}>
    <BottomTab.Screen name={NavigationKeys.screen.Home} component={Home} />
    <BottomTab.Screen
      name={NavigationKeys.screen.Categories}
      component={Categories}
    />
    <BottomTab.Screen
      name={NavigationKeys.screen.Favourite}
      component={Favourite}
    />
    <BottomTab.Screen
      name={NavigationKeys.screen.MoreOption}
      component={MoreOption}
    />
  </BottomTab.Navigator>
);
