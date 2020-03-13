/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import Navigator from './Navigator';
import {Provider as ReduxProvider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {store} from '../Redux/store';

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </ReduxProvider>
  );
};

export default App;
