import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, FilmScreenTab } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms, selectFimsByGenre } from '../../store/films-slice';
import { useEffect } from 'react';
import { getUser } from '../../store/auth-slice';
import { AppDispatch } from '../../store/store';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import FilmTabs from '../film-tabs/film-tabs';


export default function App(): JSX.Element {

  const filmsByGenre = useSelector(selectFimsByGenre);
  const featuredFilm = filmsByGenre[0];

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFilms());
    dispatch(getUser());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              filmsByGenre && filmsByGenre.length
                ?
                <MainScreen
                  featuredFilm={featuredFilm}
                  films={filmsByGenre}
                />
                : null
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute >
                <MyListScreen films={filmsByGenre} />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Film}/:id`}
            element={<FilmScreen films={filmsByGenre} />}
          >
            <Route path={''} element={<FilmTabs tab={FilmScreenTab.Overview} />} />
            <Route path={`${AppRoute.Film}/:id${AppRoute.Details}`} element={<FilmTabs tab={FilmScreenTab.Details} />} />
            <Route path={`${AppRoute.Film}/:id${AppRoute.Reviews}`} element={<FilmTabs tab={FilmScreenTab.Reviews} />} />
          </Route>
          <Route
            path={`${AppRoute.Film}/:id${AppRoute.AddReview}`}
            element={
              <PrivateRoute >
                <AddReviewScreen films={filmsByGenre} />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Player}/:id`}
            element={<PlayerScreen films={filmsByGenre} />}
          />
          <Route
            path='*'
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider >
  );
}
