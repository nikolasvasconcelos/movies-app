import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Header: React.FC<Props> = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
      <Image
        style={styles.headerImage}
        source={{
          uri:
            'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg',
        }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginVertical: 30,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: '#D8D8D8',
    borderWidth: 1,
  },
});

type Props = {
  title: string;
};
