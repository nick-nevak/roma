import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { filmsMock } from './mocks/films';
import { reviewsMock } from './mocks/reviews';
import { store } from './store/store';
import { Film, Review } from './types/types';

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
  filmCard: filmsMock[2],
  films: filmsMock,
  reviews: reviewsMock,
  filmsList: filmsMock.slice(0, 8)
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        filmCard={mocks.filmCard}
        films={mocks.films}
        reviews={mocks.reviews}
        filmsList={mocks.filmsList}
      />
    </Provider>
  </React.StrictMode>,
);
