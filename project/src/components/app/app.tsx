import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthorizationStatus, AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { AppScreenProps } from '../../types/types';

export default function App(props: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainScreen {...props} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <MyListScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Film}/:id`}
            element={<FilmScreen />}
          />
          <Route
            path={`${AppRoute.Film}/:id${AppRoute.AddReview}`}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <AddReviewScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Player}/:id`}
            element={<PlayerScreen />}
          />
          <Route
            path='*'
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
