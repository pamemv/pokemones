import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Home() {
  return (
    <Container fluid="md mt-5">
      <Row className="justify-content-md-center" style={{ textAlign: 'center' }}>
        <Col md={6}>
          <h1>
            Bienvenido maestro pókemon
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Image style={{ height: 350, width: 350 }} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;