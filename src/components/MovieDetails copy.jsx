import { useEffect, useState } from "react";
import { Badge, Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log("Params: ", params);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState({});
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log("didMount()");
    fetchDetailsFilm();
    fetchCommentsFilm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDetailsFilm = async () => {
    try {
      const response = await fetch("https://www.omdbapi.com/?apikey=ed5ee985&i=" + params.movieId);

      if (response.ok) {
        const data = await response.json();
        console.log("fetch funzionante: ", data);

        setMovie(data);

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

  const fetchCommentsFilm = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + params.movieId, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhY2Q2MjY4MzQzMTAwMTRkZWE3ODUiLCJpYXQiOjE2ODA1MjY2OTEsImV4cCI6MTY4MTczNjI5MX0.vy9fmsltjGETuelig9L2wa8VI9MS2Gu7Cs5mg89JqKw",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("fetch funzionante: ", data);

        setComments(data);
        console.log(comments);
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

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs>
          <Row className="w-100">
            <Col xs={12} md={6} lg={5} className="mt-5">
              <Image src={movie.Poster} fluid />
            </Col>
            <Col xs={12} md={6} lg={7} className="text-light mt-5">
              <Row>
                <Col sm={12}>
                  <h1>{movie.Title}</h1>
                  <p>{movie.Plot}</p>

                  <Badge bg="secondary">{movie.Year}</Badge>
                </Col>

                {/*  */}

                {/* Commenti */}
                {comments.length && (
                  <>
                    <Col sm={12}>
                      <h5 className="mt-3 mb-2">Commenti:</h5>
                      <ListGroup>
                        {comments.map((comment, index) => {
                          return (
                            <ListGroup.Item key={index} className="bg-transparent text-secondary border border-white border-opacity-25">
                              {comment.comment}
                            </ListGroup.Item>
                          );
                        })}
                      </ListGroup>
                    </Col>
                  </>
                )}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
