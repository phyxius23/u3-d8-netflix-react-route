import { Col, Container, Row } from "react-bootstrap";
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { Youtube } from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="d-flex mb-3">
          <a href="#a" className="me-3">
            <Facebook />
          </a>
          <a href="#a" className="me-3">
            <Instagram />
          </a>
          <a href="#a" className="me-3">
            <Twitter />
          </a>
          <a href="#a" className="">
            <Youtube />
          </a>
        </div>

        <Row xs={2} md={4} className="align-items-start mb-4">
          <Col>
            <Row xs={1}>
              <Col className="mb-3">
                <a href="#a">Audio and Subtitles</a>
              </Col>
              <Col className="mb-3">
                <a href="#a">Media Center</a>
              </Col>
              <Col className="mb-3">
                <a href="#a">Privacy</a>
              </Col>
              <Col>
                <a href="#a">Contact Us</a>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row xs={1}>
              <Col className="mb-3">
                <a href="#a">Audio Description</a>
              </Col>
              <Col className="mb-3">
                <a href="#a">Investor Relations</a>
              </Col>
              <Col>
                <a href="#a">Legal Notices</a>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row xs={1}>
              <Col className="mb-3">
                <a href="#a">Help Center</a>
              </Col>
              <Col className="mb-3">
                <a href="#a">Jobs</a>
              </Col>
              <Col>
                <a href="#a">Cookie Preferences</a>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row xs={1}>
              <Col className="mb-3">
                <a href="#a">Gift Cards</a>
              </Col>
              <Col className="mb-3">
                <a href="#a">Terms of Use</a>
              </Col>
              <Col>
                <a href="#a">Corporate Information</a>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="mb-3">
          <a href="#a" className="btn btn-outline-secondary">
            Service Code
          </a>
        </div>

        <div className="copyright">
          <p>© 1997-2023 Netflix, Inc.</p>
        </div>
      </Container>
    </footer>
  );
};
export default MyFooter;
