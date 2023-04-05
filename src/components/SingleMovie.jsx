import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleMovie = (props) => {
  return (
    <Col key={props.film.imdbID}>
      <Card bg="transparent" className="text-center text-light d-flex flex-column h-100">
        <Card.Img src={props.film.Poster} className="img-fluid mb-3" />
        <Card.Body className="d-flex flex-column justify-content-between p-0">
          <Card.Title className="mb-3">{props.film.Title}</Card.Title>
          <Link to={`/movie-details/${props.film.imdbID}`}>
            <Button variant="danger">Mostra dettagli</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleMovie;
