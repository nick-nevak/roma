import { Film } from '../../types/types';
import FilmCard from '../film-card/film-card';

export type FilmsListProps = {
  films: Film[];
}

export default function FilmsList({ films }: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film: Film) => <FilmCard film={film} key={film.id} />)}
    </div>
  );
}
