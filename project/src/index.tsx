import { filmsMock } from './mocks/films';
import { reviewsMock } from './mocks/reviews';
import { FilmType, ReviewType } from './types/types';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

export type MocksType = {
  filmCard: FilmType;
  films: FilmType[];
  reviews: ReviewType[];
  filmList: FilmType[];
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const mocks: MocksType = {
  filmCard: filmsMock[0],
  films: filmsMock,
  reviews: reviewsMock,
  filmList: filmsMock.slice(0, 5)
};

root.render(
  <React.StrictMode>
    <App
      filmCard={mocks.filmCard}
      films={mocks.films}
      reviews={mocks.reviews}
      filmList={mocks.filmList}
    />
  </React.StrictMode>,
);
