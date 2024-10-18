import { Container, Row, Col, Card } from 'react-bootstrap';

function Stories() {
  const stories = [
    {
      title: "Sarah's Story",
      text: "After years of suffering in silence, Sarah found the courage to leave an abusive relationship.",
      img: "https://via.placeholder.com/300",
    },
    {
      title: "Emma's Journey",
      text: "Emma started a support group to empower other women experiencing violence.",
      img: "https://via.placeholder.com/300",
    },
  ];

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Personal Stories</h2>
      <Row>
        {stories.map((story, index) => (
          <Col md={6} className="mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={story.img} />
              <Card.Body>
                <Card.Title>{story.title}</Card.Title>
                <Card.Text>{story.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Stories;
