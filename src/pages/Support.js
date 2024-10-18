import { Container, Form, Button } from 'react-bootstrap';

function Support() {
  const handleDonation = (event) => {
    event.preventDefault();
    window.open("https://www.paypal.com/donate", "_blank");
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Support Our Cause</h2>
      <Form onSubmit={handleDonation}>
        <Form.Group controlId="donationAmount">
          <Form.Label>Donation Amount (USD)</Form.Label>
          <Form.Control type="number" placeholder="Enter amount" required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Donate via PayPal
        </Button>
      </Form>
    </Container>
  );
}

export default Support;
