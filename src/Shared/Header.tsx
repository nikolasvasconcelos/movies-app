import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Movies</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {},
});
