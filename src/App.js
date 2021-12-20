import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/Page/AppBar/AppBar';
import Container from './components/Page/Container/Container';
import Loader from './components/Page/Loader/Loader';
import Footer from './components/Page/Footer/Footer';

const HomePage = lazy(() =>
  import('./components/HomePage/HomePage' /*webpackChunkName: "HomeView"*/),
);
const MoviesView = lazy(() =>
  import('./components/Reviews/Reviews' /* webpackChunkName: "MoviesView" */),
);
const MovieDetailedView = lazy(() =>
  import(
    './components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailedView" */
  ),
);

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailedView />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </Container>
  );
}
