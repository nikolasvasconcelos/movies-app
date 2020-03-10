import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>Home</Text>
      <Text>Browse</Text>
      <Text>Saved</Text>
      <Text>Account</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    height: 65,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 5,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
