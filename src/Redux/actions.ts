import {createAction} from 'redux-actions';

export const SET_USER = 'User/SET_USER';
export const setUser = createAction(SET_USER);

export const SET_MOVIES = 'Movies/SET_MOVIES';
export const FETCH_MOVIES = 'Movies/SET_MOVIES';
export const setMovies = createAction(SET_MOVIES);

export const RESET_STORE = 'RESET_STORE';
export const resetStore = createAction(RESET_STORE);
