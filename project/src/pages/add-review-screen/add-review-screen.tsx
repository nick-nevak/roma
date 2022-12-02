import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmType } from '../../types/types';
import Logo from '../../components/logo/logo';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import AddReviewForm from '../../components/add-review-form/add-review-form';

export type AddReviewScreenPropType = {
  films: FilmType[];
}

export default function AddReviewScreen({ films }: AddReviewScreenPropType): JSX.Element {
  const params = useParams();
  const film = films.find((item: FilmType) => item.id.toString() === params.id);
  if (!film) {
    return <NotFoundScreen />;
  }
  return (
    <section className="film-card film-card--full" style={{ background: film.backgroundColor }}>
      <Helmet>
        <title>{film.name}</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundColor} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Film}/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218"
            height="327"
          />
        </div>
      </div>

      <AddReviewForm />
    </section>
  );
}
