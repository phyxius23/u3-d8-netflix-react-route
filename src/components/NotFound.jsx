import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page-not-found">
      <div className="text-center text-light">
        <h1>404 - Page not found</h1>
        <p>La risorsa richiesta non esiste, torna indietro</p>
        <Link to="/">
          <Button variant="danger">Torma alla Homepage</Button>
        </Link>
      </div>
    </section>
  );
};
export default NotFound;
