import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth Component] Login', props<{ jwt: string, role: string }>());
export const logout = createAction('[Auth Component] Logout');