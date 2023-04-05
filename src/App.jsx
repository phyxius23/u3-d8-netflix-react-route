import "./App.css";
import MyNav from "./components/MyNav";
// import Profile from './components/AccountPage';
// import HeaderHomepage from "./components/HeaderHomepage";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";
import TvShows from "./components/TvShows";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      {/* 
       Per visualizzare la pagina profilo in modo corretto devo:
       1 - alla props di MyNav devo cambiare il valore in true
       2 - decommentare il Profile sia tra gli import che nei componenti sotto
       3 - commentare HeaderHomepage, ShowFilms e MyFooter sia negli import che nei component sotto
     */}
      <BrowserRouter>
        <MyNav accountPage="false" />
        <Routes>
          <Route path="/" element={<Home search="Star Wars" />}></Route>
          <Route path="/tv-shows" element={<TvShows search="Harry Potter" />}></Route>
          <Route path="/movie-details/:movieId" element={<MovieDetails />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <MyFooter />
      </BrowserRouter>
      {/* <MyNav accountPage="false" /> */}
      {/* <HeaderHomepage /> */}
      {/* <Profile /> */}
      {/* <ShowFilms search="Harry Potter" /> */}
      {/* <ShowFilms search="Star Wars" /> */}
      {/* <ShowFilms search="Indiana Jones" /> */}
      {/* <MyFooter /> */}
    </>
  );
}

export default App;
