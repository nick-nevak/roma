import { Action, AnyAction, configureStore, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import filmsReducer from './films/films-slice';
import uiReducer from './films/ui-slice';

export const store = configureStore({
  reducer: {
    filmsStore: filmsReducer,
    uiStore: uiReducer,
  },
});

export type Store = typeof store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
