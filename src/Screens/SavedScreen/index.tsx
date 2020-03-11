import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SavedScreen: React.FC = () => {
  return (
    <View style={styles.savedContainer}>
      <Text>Saved Screen</Text>
    </View>
  );
};

export default SavedScreen;

export const screenName = 'Saved';

const styles = StyleSheet.create({
  savedContainer: {
    flex: 1,
  },
});
