import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { filmsMock } from './mocks/films';
import { reviewsMock } from './mocks/reviews';
import { FilmsType, FilmType, ReviewsType } from './types/types';

export type MocksType = {
  filmCard: FilmType;
  films: FilmsType;
  reviews: ReviewsType;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const mocks: MocksType = {
  filmCard: filmsMock[0],
  films: filmsMock,
  reviews: reviewsMock
};

root.render(
  <React.StrictMode>
    <App
      filmCard={mocks.filmCard}
      films={mocks.films}
      reviews={mocks.reviews}
    />
  </React.StrictMode>,
);
