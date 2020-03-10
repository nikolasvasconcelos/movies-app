import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';

import HomeScreen, {screenName as homeName} from '../Screens/HomeScreen';
import {Footer} from '../Shared';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName={homeName} tabBar={Footer}>
          <Tab.Screen name={homeName} component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F1F4F7'},
});
