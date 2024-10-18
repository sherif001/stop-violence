import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1>Stop Violence Against Women</h1>
          <p className="lead">
            Join us in raising awareness and taking action to stop violence against women.
          </p>
          <Button variant="danger" size="lg" href="/support">
            Get Help Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
