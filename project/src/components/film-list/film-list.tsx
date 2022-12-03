import { Film } from '../../types/types';
import FilmCard from '../film-card/film-card';

export type FilmListProps = {
  films: Film[];
}

export default function FilmList({ films }: FilmListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film: Film) => <FilmCard film={film} key={film.id} />)}
    </div>
  );
}
