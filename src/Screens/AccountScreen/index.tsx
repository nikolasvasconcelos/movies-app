import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AccountScreen: React.FC = () => {
  return (
    <View style={styles.accountContainer}>
      <Text>Account Screen</Text>
    </View>
  );
};

export default AccountScreen;

export const screenName = 'Account';

const styles = StyleSheet.create({
  accountContainer: {
    flex: 1,
  },
});
