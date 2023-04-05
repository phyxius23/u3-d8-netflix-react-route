import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import avatar from "../assets/img/kids_icon.png";

const AccountPage = () => {
  return (
    <Container className="container-profile custom-color">
      <Row>
        <Col xs={12} className="mb-3 br">
          <h1>Edit Profile</h1>
        </Col>

        <Col xs={12} className="mb-3">
          <Row className="br">
            <Col xs={3}>
              <Image src={avatar} fluid />
            </Col>

            <Col xs={9}>
              <div className="pe-4">
                <Row className="br">
                  <Col xs={12}>
                    <p className="btn btn-secondary w-100">Strive Student</p>
                    <p className="mb-0">Language</p>
                    <p className="mb-3">English</p>
                  </Col>
                </Row>

                <Row className="br">
                  <Col xs={12}>
                    <p className="mb-2 mt-3">Maturity Settings:</p>
                    <p className="btn btn-secondary mb-2">All maturity ratings</p>
                    <p className="mb-2">Show titles of all maturity rating for this profits.</p>
                    <p className="btn btn-outline-secondary mb-3">Edit</p>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <p className="mb-1 mt-3">Autoplay controls</p>

                    <Form>
                      <div className="mb-3">
                        <Form.Check type="checkbox" id="checkbox" label="Autoplay next episode in a series on all devices." />
                      </div>
                      <div className="mb-3">
                        <Form.Check type="checkbox" id="checkbox" label="Autoplay previews while browsing on all devices." />
                      </div>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>

        <Col xs={12} className="d-flex justify-content-center">
          <Button variant="outline-secondary" className="mx-2">
            SAVE
          </Button>
          <Button variant="outline-secondary" className="mx-2">
            CANCEL
          </Button>
          <Button variant="outline-secondary" className="mx-2">
            DELETE PROFILE
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default AccountPage;
