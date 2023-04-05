import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

const Home = (props) => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Errore: ", error.message);
      setError(true);
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchShowFilm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="home">
      <div className="mb-5">
        <Container>
          {/* POSIZIONARE UN CONDIZIONALE CHE NEL CASO NON FOSSERO STATI TROVATI DEI FILM DEVE MOSTRARE A VIDEO UN ALERT CHE CI AVVISI */}
          <h2 className="mb-3 h4">{props.search}</h2>

          {/* POSIZIONARE LO SPINNER IN CENTRO PAGINA/SECTION */}
          {isLoading && !error && (
            <div className="text-center mt-5">
              <Spinner animation="border" variant="secondary" role="status">
                <span className="visually-hidden text-center">Loading...</span>
              </Spinner>
            </div>
          )}
          <Row xs={1} sm={2} md={4} lg={5} xl={6} className="g-4">
            {films.map((film) => (
              // <Col key={index}>
              //   <Link to={`/movie-details/${film.imdbID}`}>
              //     <Image src={film.Poster} fluid />
              //   </Link>
              // </Col>
              // <Col key={film.imdbID}>
              //   <Card bg="transparent" className="text-center text-light d-flex flex-column h-100">
              //     <Card.Img src={film.Poster} className="img-fluid mb-3" />
              //     <Card.Body className="d-flex flex-column justify-content-between p-0">
              //       <Card.Title className="mb-3">{film.Title}</Card.Title>
              //       <Link to={`/movie-details/${film.imdbID}`}>
              //         <Button variant="light">Mostra dettagli</Button>
              //       </Link>
              //     </Card.Body>
              //   </Card>
              // </Col>
              <SingleMovie key={film.imdbID} film={film} />
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default Home;
