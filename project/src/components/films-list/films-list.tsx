import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MAX_FILMS_SHOWN_HOME } from '../../const';
import { setGenre } from '../../store/films-slice';
import { AppDispatch } from '../../store/store';
import { Film } from '../../types/types';
import FilmCard from '../film-card/film-card';
import ShowMore from '../show-more/show-more';

export type FilmsListProps = {
  films: Film[];
  isAtHome?: boolean;
}

export default function FilmsList({ films, isAtHome }: FilmsListProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const selectGenre = ((genre: string) => dispatch(setGenre(genre)));
  const filmsFiltered: Film[] = [];

  if (isAtHome) {
    // films?.forEach((film: Film) => {
    //   if (selectGenre === Genre.AllGenres || selectGenre === film.genre) {
    //     filmsFiltered.push(film);
    //   }
    // });
  }

  const [activeId, setActiveId] = useState<string | null>(null);
  const [filmsShown, setFilmsShown] = useState<number>(Math.min(filmsFiltered.length, MAX_FILMS_SHOWN_HOME));

  const handleMouseOver = (evt: BaseSyntheticEvent) => {
    const target = evt.target as Element;
    const parent = target.parentElement as Element;
    if (parent.classList.contains('small-film-card') || target.tagName === 'A') {
      setActiveId(parent.id);
      return;
    }
    setActiveId(null);
  };

  const increaseFilmsShown = () => {
    setFilmsShown(Math.min(filmsFiltered.length, filmsShown + MAX_FILMS_SHOWN_HOME));
  };

  useEffect(() => {
    setFilmsShown(Math.min(filmsFiltered.length, MAX_FILMS_SHOWN_HOME));
  }, [selectGenre, filmsFiltered.length]);

  if (isAtHome) {
    return (
      <>
        <div className="catalog__films-list" onMouseOver={handleMouseOver} onMouseOut={() => setActiveId(null)}>
          {filmsFiltered.slice(0, filmsShown).map((film: Film) => <FilmCard film={film} isActive={film.id.toString() === activeId} key={film.id} />)}
        </div>
        {filmsShown < filmsFiltered.length ? <ShowMore onClick={increaseFilmsShown} /> : null}
      </>);
  }
  return (
    <div className="catalog__films-list" onMouseOver={handleMouseOver} onMouseOut={() => setActiveId(null)}>
      {films?.map((film: Film) => <FilmCard film={film} isActive={film.id.toString() === activeId} key={film.id} />)}
    </div>);
}
