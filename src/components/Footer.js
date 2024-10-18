import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Email: info@stopviolence.org</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={6}>
            <h5>Follow Us</h5>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              Instagram
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
