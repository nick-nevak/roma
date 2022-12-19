import { Helmet } from 'react-helmet-async';
import { Film } from '../../types/types';
import { GenresList } from '../../components/genres-list/genres-list';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../store/ui-slice';
import { logout, selectUser } from '../../store/auth-slice';
import { AppDispatch } from '../../store/store';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import Spinner from '../../components/spinner/spinner';

export type MainScreenProps = {
  featuredFilm: Film;
  films: Film[];
}

export default function MainScreen({ featuredFilm, films }: MainScreenProps): JSX.Element {
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch<AppDispatch>();
  const handleLogoutSubmit = () => { dispatch(logout()); };
  const user = useSelector(selectUser);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="film-card">
        <Helmet>
          <title>WTW main page</title>
        </Helmet>
        <div className="film-card__bg">
          <img src={featuredFilm.backgroundImage} alt={featuredFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          {user ?
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <div className="user-block__link"
                  onClick={handleLogoutSubmit}
                >Sign out
                </div>
              </li>
            </ul>
            :
            <ul className="user-block">
              <li className="user-block__item">
                <Link to={AppRoute.Login} className="user-block__link">Log in</Link>
              </li>
            </ul>}
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={featuredFilm.posterImage} alt={`${featuredFilm.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{featuredFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{featuredFilm.genre}</span>
                <span className="film-card__year">{featuredFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={() => navigate(`${AppRoute.Player}/${featuredFilm.id}`)} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{films.length}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content" >
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList films={films} />

          <div className="catalog__films-list">
            <FilmsList films={films} />
          </div>
        </section>
        <Footer />
      </div >
    </>
  );
}

