import { Helmet } from 'react-helmet-async';
import { Film } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logout, selectUser } from '../../store/auth-slice';
import { AppDispatch } from '../../store/store';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';

export type MyListScreenProps = {
  films: Film[];
}
export default function MyListScreen({ films }: MyListScreenProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const handleLogoutSubmit = () => { dispatch(logout()); };
  const user = useSelector(selectUser);
  return (
    <div className="user-page">
      <Helmet>
        <title>WTW my list</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
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
        {/* можно только при токене */}
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList films={films} />
        </div>
      </section >
      <Footer />
    </div >
  );
}
