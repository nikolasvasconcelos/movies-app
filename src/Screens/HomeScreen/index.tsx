import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Content, Icon, View, Text} from 'native-base';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';

import {Header} from '../../Shared';

import {FETCH_MOVIES} from '../../Redux/actions';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const selectedData = useSelector(
    state => state.Movies.moviesList,
    shallowEqual,
  );

  React.useEffect(() => {
    dispatch({type: FETCH_MOVIES});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Header title="Movies" />
      <Content>
        <View style={styles.searchInputWrapper}>
          <Icon style={styles.searchInputIcon} active name="search" />
          <TextInput placeholder="Search for Movies, Actors and Genres" />
        </View>
        <View style={styles.header}>
          <Text>Recently Added</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {[1, 2, 3, 4, 5].map(i => (
            <View key={i}>
              <Text>{i}</Text>
            </View>
          ))}
        </ScrollView>
      </Content>
    </React.Fragment>
  );
};

export const screenName = 'Home';

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
  },
  searchInputWrapper: {
    height: 35,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    borderColor: '#D8D8D8',
    borderRadius: 50,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 30,
  },
  searchInputIcon: {
    fontSize: 15,
    marginRight: 10,
    color: 'grey',
  },
});
