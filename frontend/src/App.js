import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import AppForm from './components/AppForm'

function App() {
  const handleSubmit = (user) => {}
  return (
    <>
      <Header />
      <main className='py-5'>
        <Container className='d-flex justify-content-center'>
          <Row>
            <Col>
              <AppForm handleSubmit={handleSubmit} />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
