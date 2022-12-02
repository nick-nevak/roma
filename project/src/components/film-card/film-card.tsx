import { Link } from 'react-router-dom';
import { FilmType } from '../../types/types';
import { AppRoute } from '../../const';

type FilmCardPropsType = {
  film: FilmType;
}

export default function FilmCard(props: FilmCardPropsType): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.film.previewImage} alt={props.film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${props.film.id}`}>{props.film.name}</Link>
      </h3>
    </article>
  );
}
