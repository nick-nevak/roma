import { filmsMock } from './mocks/films';
import { reviewsMock } from './mocks/reviews';
import { Film, Review } from './types/types';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

export type Mocks = {
  filmCard: Film;
  films: Film[];
  reviews: Review[];
  filmsList: Film[];
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const mocks: Mocks = {
  filmCard: filmsMock[0],
  films: filmsMock,
  reviews: reviewsMock,
  filmsList: filmsMock.slice(0, 5)
};

root.render(
  <React.StrictMode>
    <App
      filmCard={mocks.filmCard}
      films={mocks.films}
      reviews={mocks.reviews}
      filmsList={mocks.filmsList}
    />
  </React.StrictMode>,
);
