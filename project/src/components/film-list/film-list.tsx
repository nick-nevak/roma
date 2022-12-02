import { FilmType } from '../../types/types';
import FilmCard from '../film-card/film-card';

export type FilmListPropsType = {
  films: FilmType[];
}

export default function FilmList({ films }: FilmListPropsType): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film: FilmType) => <FilmCard film={film} key={film.id} />)}
    </div>
  );
}
