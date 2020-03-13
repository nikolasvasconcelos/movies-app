import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';

import {name as appName} from '../../app.json';

import User from './UserReducer';
import Movies from './MoviesReducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  User,
  Movies,
});

const persistConfig = {
  key: appName,
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [`navigation`],
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

sagaMiddleware.run(mySaga);
