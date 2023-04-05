import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { BellFill } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";
import logo from "../assets/img/netflix_logo.png";
import avatar from "../assets/img/avatar.png";
import { Link, useLocation } from "react-router-dom";

const MyNav = (props) => {
  const location = useLocation();
  console.log("Location: ", location);
  return (
    <Navbar className="navbar-dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} height="40" alt="Netflix" />
        </Navbar.Brand>

        {!(props.accountPage.toLowerCase() === "true") && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link> */}
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
                  Home
                </Link>
                {/* <Nav.Link href="#link">TV Shows</Nav.Link> */}
                <Link className={`nav-link ${location.pathname === "/tv-shows" ? "active" : ""}`} to="/tv-shows">
                  TV Shows
                </Link>
                {/* <Link></Link> */}
                {/* <Nav.Link href="#link">Movies</Nav.Link> */}
                {/* <Nav.Link href="#link">Recently Added</Nav.Link> */}
                {/* <Nav.Link href="#link">My List</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>

            <div className="user-menu d-flex align-items-center ms-auto">
              <div className="mx-2">
                <Search />
              </div>
              <div className="mx-3">
                <a className="nav-link text-uppercase active" href="#kids">
                  Kids
                </a>
              </div>
              <div className="mx-3">
                <BellFill />
              </div>
              <div className="mx-3">
                <a href="#a">
                  <Image src={avatar} height="40" alt="Netflix" />
                </a>
              </div>
            </div>
          </>
        )}
      </Container>
    </Navbar>
  );
};
export default MyNav;
