import { Container, Nav } from "react-bootstrap";
import { CaretDownFill, List, GridFill } from "react-bootstrap-icons";

const HeaderHomepage = () => {
  return (
    <header>
      <Container className="text-white my-3">
        <div className="d-flex align-items-center">
          <div className="title me-4">
            <h1>TV Shows</h1>
          </div>

          <div className="genres-wrapper">
            <div className="genres d-flex align-items-center py-1 px-3 border">
              <p className="mb-0 me-3">Genres</p>
              <CaretDownFill />
            </div>

            <div className="list-genres">
              <div className="flex m-3">
                <Nav>
                  <Nav.Item>
                    <Nav.Link href="#">Adolescenziale</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Anime</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Azione</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Bambini</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Britannici</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Commedie</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Crime</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Nav>
                  <Nav.Item>
                    <Nav.Link href="#">Docuserie</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Drammi</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Europei</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Fantascienza e fantasy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Gialli e misteri</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Horror</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Internazionali</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Nav>
                  <Nav.Item>
                    <Nav.Link href="#">Italiani</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Festa della donna</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Reality e talk show</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Romantici</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Scienza e natura</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Thriller</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">USA</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
          </div>

          <div className="icon d-flex align-items-center">
            <div className="d-flex me-3">
              <List />
            </div>
            <div className="d-flex">
              <GridFill />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default HeaderHomepage;
