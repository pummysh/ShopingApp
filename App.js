/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootNavigator from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store/store';


export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
       <Provider store={store}>
      <RootNavigator />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
