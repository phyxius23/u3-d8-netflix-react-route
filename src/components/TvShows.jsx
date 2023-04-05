import { useEffect, useState } from "react";
import { Col, Container, Row, Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const TvShows = (props) => {
  const [error, setError] = useState(false);
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [searchFilm, setSearchFilm] = useState(props.search);
  // const [errorMessage, setErrorMessage] = useState("");

  const fetchShowFilm = async () => {
    try {
      let stringMin = props.search.replace(" ", "+").toLowerCase();

      const response = await fetch("https://www.omdbapi.com/?apikey=ed5ee985&type=movie&s=" + stringMin);

      if (response.ok) {
        const data = await response.json();
        console.log("fetch funzionante: ", data.Search);

        setFilms(data.Search);
        setIsLoading(false);
      } else {
        setError(true);
        // setErrorMessage(error.message);
      }
    } catch (error) {
      console.log("Errore: ", error.message);
      setError(true);
      setIsLoading(false);
      // setErrorMessage(error);
    }
  };

  useEffect(() => {
    fetchShowFilm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div className="films mb-5">
        <Container>
          <h2 className="mb-3 h4">{props.search}</h2>

          {isLoading && !error && (
            <div className="text-center mt-5">
              <Spinner animation="border" variant="secondary" role="status">
                <span className="visually-hidden text-center">Loading...</span>
              </Spinner>
            </div>
          )}
          <Row xs={1} sm={2} md={4} lg={6} className="g-2">
            {films.map((film, index) => (
              <Col key={index}>
                <Link to={`/movie-details/${film.imdbID}`}>
                  <Image src={film.Poster} fluid />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default TvShows;
