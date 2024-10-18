import { Container, Table } from 'react-bootstrap';

function Statistics() {
  return (
    <Container className="mt-5">
      <h2>Global Statistics on Violence Against Women</h2>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Region</th>
            <th>Percentage of Women Affected</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Africa</td>
            <td>35%</td>
          </tr>
          <tr>
            <td>Europe</td>
            <td>25%</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Statistics;
