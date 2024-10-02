import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';

export const auth = {
    jwt: '',
    role: 'usr',
};

export const authReducer = createReducer(
  auth,
  on(login, (state, { jwt, role }) => ({ jwt, role })),
  on(logout, (state) => ({ ...state, jwt: null })),
);