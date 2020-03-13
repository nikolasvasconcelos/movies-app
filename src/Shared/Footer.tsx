import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

const footerIcons = {
  HOME: {name: 'home-outline', type: 'MaterialCommunityIcons'},
  BROWSE: {name: 'youtube', type: 'Feather'},
  SAVED: {name: 'bookmark', type: 'Feather'},
  ACCOUNT: {name: 'user', type: 'Feather'},
};

const Footer: React.FC<Props> = ({state, navigation}) => {
  return (
    <View style={styles.footer}>
      {state.routes.map(route => {
        const iconName = footerIcons[`${route.name.toUpperCase()}`].name;
        const iconType = footerIcons[route.name.toUpperCase()].type;
        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}>
            <View style={styles.footerIconWrapper}>
              <Icon style={styles.footerIcon} name={iconName} type={iconType} />
              <Text style={styles.footerText}>{route.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Footer;

interface Props {
  state: NavState;
  navigation: any;
  descriptors: any;
}

interface NavState {
  routes: NavRoute[];
  routeNames: [];
}

interface NavRoute {
  name: string;
  key: string;
  params: any;
}

const styles = StyleSheet.create({
  footer: {
    height: 70,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 15,
    zIndex: 5,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 3,
  },
  footerText: {fontSize: 11},
  footerIcon: {fontSize: 20},
  footerIconWrapper: {alignItems: 'center'},
});
