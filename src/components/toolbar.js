import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import { BiSearch } from 'react-icons/bi';
import './toolbar.css';

function ColorSchemesExample() {
  const navbarStyle = {
    backgroundColor: '#8B8B8B',
    color: 'black',
    height: '110px',
  };

  return (
    <>
      

      <Navbar style={navbarStyle} variant="light">
        <Container fluid>

          <Nav className="buying">
          <Nav.Link href="#home">찾아줘</Nav.Link>
          </Nav>

          <Nav className="freeBie">
          <Nav.Link href="#home">나눠요</Nav.Link>
          </Nav>

          <Nav className="community">
          <Nav.Link href="#home">공유해요</Nav.Link>
          </Nav>

          <NavDropdown title="년도별" id="basic-nav-dropdown" className="year">
            <NavDropdown.Item href="#home">~1960</NavDropdown.Item>
            <NavDropdown.Item href="#home">1970</NavDropdown.Item>
            <NavDropdown.Item href="#home">1980</NavDropdown.Item>
            <NavDropdown.Item href="#home">1990</NavDropdown.Item>
            <NavDropdown.Item href="#home">2000</NavDropdown.Item>
            <NavDropdown.Item href="#home">2010</NavDropdown.Item>
            <NavDropdown.Item href="#home">2020</NavDropdown.Item>
          </NavDropdown>

          <Nav className='topLogo'>
            <img src="img/logo.png" width="150" height="200" alt="로고"/>
          </Nav>
          <Navbar.Brand href="#home" className="mainName"><h2>책판다</h2></Navbar.Brand>

          <Form className="d-flex">
            <InputGroup className="search-bar">
              <Form.Control
                type="search"
                placeholder="책을 검색해보세요"
                className="me-2 search-input"
                aria-label="Search"
              />
              <Button variant="outline-light search-button">
                <BiSearch />
              </Button>
            </InputGroup>
              <Nav className="join">
            <Nav.Link href="/signup">회원가입</Nav.Link>
          </Nav>

          <Nav className='login'>
            <Nav.Link href="/login">로그인</Nav.Link>
          </Nav>
          </Form>


          
          <Nav className="mypage">
            <Nav.Link href="#home"><img src="img/mypage2.png" width="100" alt="마이페이지"/></Nav.Link>
          </Nav>
          <Nav className="alarm">
            <Nav.Link href="#home"><img src="img/alarm.png" width="90" alt="알람"/></Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;