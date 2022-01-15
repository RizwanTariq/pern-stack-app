import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
function Header() {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>USER CRUD</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
