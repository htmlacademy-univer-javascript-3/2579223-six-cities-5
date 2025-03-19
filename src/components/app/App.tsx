import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import OfferPage from '../../pages/OfferPage/OfferPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { AuthStatus, Paths } from '../../const';

type AppScreenProps = {
  cardsCount: number;
}

function App({cardsCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Home} element={<MainPage cardsCount={cardsCount} />} />
        <Route path={Paths.Login} element={<LoginPage />} />
        <Route
          path={Paths.Favorites}
          element={
            <PrivateRoute
              authStatus={AuthStatus.NoAuth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={Paths.Offer} element={<OfferPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
