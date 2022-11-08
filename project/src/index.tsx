import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const FilmCard = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014
} as const;

root.render(
  <React.StrictMode>
    <App {...FilmCard} />
  </React.StrictMode>,
);
