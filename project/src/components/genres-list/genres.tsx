import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmsByGenre } from "../../store/films/films-slice";
import { RootState } from "../../store/store";
import { Film } from "../../types/types";

// Union type
export type Genres = 'AllGenres' | 'Comedy';

// Enum
export enum GenresEnum {
  AllGenres = 'AllGenres',
  Comedy = 'Comedy',
}

type Props = {
  genre: string;
  films: Film[];
}
export function GenresList({ genre, films }: Props) {
  const films2 = useSelector((state: RootState) => state.films.films);
  const dispatch = useDispatch();
  const selectGenree = (genre: GenresEnum) => () => { dispatch(getFilmsByGenre(genre)) };
  const selectGenree2 = (genre: string) => { dispatch(getFilmsByGenre(genre)) };

  useEffect(() => {
    // dispatch(loadFilms());
  }, [dispatch])

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a
          href="#"
          className="catalog__genres-link"
          onClick={selectGenree(GenresEnum.AllGenres)}>
          All genres
        </a>
      </li>
      {/* TODO: привязать остальные жанры к функции onClick selectGenree */}
      <li className="catalog__genres-item">
        <a
          href="#"
          className="catalog__genres-link"
          onClick={() => { dispatch(getFilmsByGenre('Comedy')) }}
        >
          Comedies</a>
      </li>
      <li className="catalog__genres-item">
        <a
          href="#"
          className="catalog__genres-link"
        >Crime</a>
      </li>
      <li className="catalog__genres-item">
        <a
          href="#"
          className="catalog__genres-link"
        >Documentary</a>
      </li>
      <li className="catalog__genres-item">
        <a
          href="#"
          className="catalog__genres-link"
        >Dramas</a>
      </li>
      <li className="catalog__genres-item">
        <a
          href="#"
          className="catalog__genres-link"
        >Horror</a>
      </li>
      <li className="catalog__genres-item">
        <a
          href="#"
          className="catalog__genres-link"
        >Kids & Family</a>
      </li>
      <li className="catalog__genres-item">
        <a
          href="#"
          className="catalog__genres-link"
        >Romance</a>
      </li>
      <li className="catalog__genres-item">
        <a
          href="#"
          className="catalog__genres-link"
        >Sci-Fi</a>
      </li>
      <li className="catalog__genres-item">
        <a
          href="#"
          className="catalog__genres-link"
        >Thrillers</a>
      </li>
    </ul>
  );
}
