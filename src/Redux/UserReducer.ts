import {handleActions} from 'redux-actions';
import {SET_USER, RESET_STORE} from './actions';

export interface InitialState {
  loading: boolean;
  token: string;
  name: string;
  email: string;
}

const initialState: InitialState = {
  loading: false,
  token: '',
  name: '',
  email: '',
};

const User: Object = handleActions(
  {
    [RESET_STORE]: () => initialState,
    [SET_USER]: (state, {payload}) => ({
      ...state,
      ...payload,
    }),
  },
  initialState,
);

export default User;
