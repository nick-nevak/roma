import { Action, AnyAction, configureStore, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import filmsReducer from './films-slice';
import uiReducer from './ui-slice';
import authReducer from './auth-slice';

export const store = configureStore({
  reducer: {
    filmsStore: filmsReducer,
    uiStore: uiReducer,
    authStore: authReducer,
  },
});

export type Store = typeof store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
