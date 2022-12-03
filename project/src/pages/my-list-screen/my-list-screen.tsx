import { Helmet } from 'react-helmet-async';
import { Film } from '../../types/types';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';

export type MyListScreenProps = {
  filmsList: Film[];
}
export default function MyListScreen({ filmsList }: MyListScreenProps): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>WTW my list</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{filmsList.length}</span></h1>
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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList films={filmsList} />
        </div>
      </section >
      <Footer />
    </div >
  );
}
