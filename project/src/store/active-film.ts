import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import baseApi from '../api/api';
import { Film, Review } from '../types/types';
import { RootState } from './store';

type ActiveFilm = {
  film: Film | null;
  similarFilms: Film[];
  reviews: Review[];
}
type NewReview = {
  comment: string;
  rating: number;
}
export const initialState: ActiveFilm = {
  film: null,
  similarFilms: [] as Film[],
  reviews: [] as Review[],
};

export const getFilm = createAsyncThunk(
  'id',
  async (filmId: number) => {
    const response = await baseApi.get<Film>(`/films/${filmId}`);
    return response.data;
  });

export const postReview = createAsyncThunk(
  'newReview',
  async (filmId: number, newReview: NewReview,) => {
    const response = await baseApi.post<Review>(`/comments/${filmId}`, newReview);
    //только при токене
    return response.data;
  });

export const activeFilm = createSlice({
  name: 'active',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilm.fulfilled, (state, action) => {
      state.film = action.payload;
    });
    builder.addCase(postReview.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
  },
});

const selectSelf = (state: RootState): RootState => state;

export const getActiveData = (state: State): ActiveFilm => state[Namespace.Active];

export const getActiveMovie = (state: State): Film | null => state[Namespace.Active].movie;
export const getSimilarMovies = (state: State): Film[] | [] => state[Namespace.Active].similarMovies;
export const getReviews = (state: State): Review[] => state[Namespace.Active].reviews;
