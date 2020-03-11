import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Header} from '../../Shared';

const HomeScreen: React.FC = () => {
  return (
    <React.Fragment>
      <Header title="Movies" />
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    </React.Fragment>
  );
};

export const screenName = 'Home';

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
