import * as React from 'react';
import {StyleSheet, TouchableHighlight, Text, View} from 'react-native';

const Footer: React.FC<Props> = ({state, descriptors, navigation}) => {
  console.log(state, descriptors, navigation);
  return (
    <View style={styles.footer}>
      {state.routes.map(route => (
        <TouchableHighlight
          key={route.key}
          onPress={() => navigation.navigate(route.name)}>
          <Text>{route.name}</Text>
        </TouchableHighlight>
      ))}
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
    height: 65,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 10,
    zIndex: 5,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
