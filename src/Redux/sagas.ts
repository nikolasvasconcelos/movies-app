import {takeLatest, put} from 'redux-saga/effects';
import {FETCH_MOVIES, SET_MOVIES} from './actions';
import tmdb from '../lib/tmdb';
import api from './api';

function* fetchMovies() {
  try {
    const {data} = yield api.get(`/discover/movie`, {
      params: {
        api_key: tmdb.apiKey,
      },
    });
    yield put({type: SET_MOVIES, payload: {moviesList: data.results}});
  } catch (error) {
    console.error(error);
  }
}

function* mySaga() {
  yield takeLatest(FETCH_MOVIES, fetchMovies);
}

export default mySaga;
