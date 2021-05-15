import { Container, Row, Col } from 'react-bootstrap';
import LeftHalf from './components/LeftHalf/LeftHalf';
import RightHalf from './components/RightHalf/RightHalf';
import './css/App.css';
import './css/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

      <Container fluid className=" canvas">
        <Row>
          <Col className="_column bg-dark-blue m-0 p-0">
            <LeftHalf />
          </Col>
          <Col md={8} className="bg-white dark-blue-text __column m=0 p-0">
            <RightHalf />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
