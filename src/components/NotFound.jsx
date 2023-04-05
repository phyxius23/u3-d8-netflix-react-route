import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>404 - Page not found</h1>
      <p>La risorsa richiesta non esiste, torna indietro</p>
      <Link to="/">
        <Button variant="info">Torma alla Homepage</Button>
      </Link>
    </div>
  );
};
export default NotFound;
