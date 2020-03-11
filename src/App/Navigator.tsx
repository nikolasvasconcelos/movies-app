import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';

import HomeScreen, {screenName as homeName} from '../Screens/HomeScreen';
import BrowseScreen, {screenName as browseName} from '../Screens/BrowseScreen';
import SavedScreen, {screenName as savedName} from '../Screens/SavedScreen';
import AccountScreen, {
  screenName as accountName,
} from '../Screens/AccountScreen';
import {Footer} from '../Shared';

const Tab = createBottomTabNavigator();

const Navigator: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeName}
          tabBar={props => <Footer {...props} />}>
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={browseName} component={BrowseScreen} />
          <Tab.Screen name={savedName} component={SavedScreen} />
          <Tab.Screen name={accountName} component={AccountScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: '#F1F4F7', paddingBottom: 0},
});
