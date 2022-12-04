import { Link } from 'react-router-dom';
import { Film } from '../../types/types';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
  isActive: boolean;
}

export default function FilmCard({ film, isActive }: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" id={film.id.toString()}>
      <div className="small-film-card__image">
        {
          isActive ?
            <VideoPlayer filmCard={film} isMuted isPlaying /> :
            <img src={film.previewImage} alt={film.name} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title" id={film.id.toString()}>
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}
