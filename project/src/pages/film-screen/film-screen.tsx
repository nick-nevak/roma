import { Helmet } from 'react-helmet-async';
import { Film } from '../../types/types';
import { useParams, Link, useNavigate, Outlet } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useEffect } from 'react';
import { AppDispatch } from '../../store/store';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import Spinner from '../../components/spinner/spinner';

export type FilmScreenProp = {
  films: Film[];
}

export default function FilmScreen({ films }: FilmScreenProp): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch<AppDispatch>();

  const film: Film | null = useAppSelector(getActivefilm);
  const similar: Film[] = useAppSelector(getSimilarfilms);
  const isLoading: boolean = useAppSelector(getLoadingStatus);
  const authStatus: AuthorizationStatus = useAppSelector(getAuthStatus);

  useEffect(() => {
    if (film?.id.toString() !== params.id) {
      dispatch(fetchActiveDataAction(params.id as string));
    }
  }, [dispatch, film?.id, params.id]);

  if (isLoading || (film?.id.toString() !== params.id)) {
    return (
      <Spinner />
    );
  }

  return (
    <div>
      {
        film && (
          <>
            <section className="film-card film-card--full" style={{ background: film.backgroundColor }}>
              <Helmet>
                <title>{film.name}</title>
              </Helmet>
              <div className="film-card__hero">
                <div className="film-card__bg">
                  <img src={film?.backgroundImage} alt={film?.name} />
                </div>

                <h1 className="visually-hidden">WTW</h1>

                <header className="page-header film-card__head">
                  <Logo />
                  <User />
                </header>

                <div className="film-card__wrap">
                  <div className="film-card__desc">
                    <h2 className="film-card__title">{film?.name}</h2>
                    <p className="film-card__meta">
                      <span className="film-card__genre">{film?.genre}</span>
                      <span className="film-card__year">{film?.released}</span>
                    </p>

                    <div className="film-card__buttons">
                      <button onClick={() => navigate(`${AppRoute.Player}/${film?.id}`)} className="btn btn--play film-card__button" type="button">
                        <svg viewBox="0 0 19 19" width="19" height="19">
                          <use xlinkHref="#play-s"></use>
                        </svg>
                        <span>Play</span>
                      </button>
                      <MyListButton film={film} />
                      {authStatus === AuthorizationStatus.Auth ?
                        <Link to={`${AppRoute.film}/${film.id}${AppRoute.AddReview}`} className="btn film-card__button">Add review</Link> :
                        null}
                    </div>
                  </div>
                </div>
              </div>

              <div className="film-card__wrap film-card__translate-top">
                <Outlet />
              </div>
            </section>

            <div className="page-content">
              <section className="catalog catalog--like-this">
                <h2 className="catalog__title">More like this</h2>

                <FilmsList films={similar} />
              </section>
              <Footer />
            </div>
          </>
        )
      }
    </div >
  );
}
