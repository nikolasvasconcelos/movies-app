import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BrowseScreen: React.FC = () => {
  return (
    <View style={styles.browseContainer}>
      <Text>Browse Screen</Text>
    </View>
  );
};

export default BrowseScreen;

export const screenName = 'Browse';

const styles = StyleSheet.create({
  browseContainer: {
    flex: 1,
  },
});
