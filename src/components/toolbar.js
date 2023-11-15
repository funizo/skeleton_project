import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ColorSchemesExample() {
    const navbarStyle = {
        backgroundColor: '#fff2e6',
        color: 'black',
        height: '50px',
      };

  return (
    <>
      <Navbar style={navbarStyle} variant="light">
        <Container fluid>
          <Navbar.Brand href="#home" className="mainName">책팔조</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">장바구니</Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        <Nav>
            <Nav.Item>
                <Nav.Link href="/login">로그인</Nav.Link>
            </Nav.Item>
        </Nav>
        
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;