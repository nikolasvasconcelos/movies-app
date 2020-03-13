import {handleActions} from 'redux-actions';
import {SET_MOVIES, RESET_STORE} from './actions';

const initialState = {
  loading: true,
  moviesList: [],
};

const Movies = handleActions(
  {
    [RESET_STORE]: () => initialState,
    [SET_MOVIES]: (state, {payload}) => ({
      ...state,
      ...payload,
    }),
  },
  initialState,
);

export default Movies;
