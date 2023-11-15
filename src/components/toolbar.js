import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./toolbar.css"


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
          <Nav className="year">
              <Nav.Link href="#home">~1960</Nav.Link>
              <Nav.Link href="#home">1970</Nav.Link>
              <Nav.Link href="#home">1980</Nav.Link>
              <Nav.Link href="#home">1990</Nav.Link>
              <Nav.Link href="#home">2000</Nav.Link>
              <Nav.Link href="#home">2010</Nav.Link>
              <Nav.Link href="#home">2020</Nav.Link>
            </Nav>
        <Nav className='topLogo'>
          <img src="img/logo.png" width="150" height="200" alt="로고"/>
        </Nav>
          <Navbar.Brand href="#home" className="mainName"><h2>책판다</h2></Navbar.Brand>
          
          {/* <Nav.Link href="#features"></Nav.Link> */}
     
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" >Search</Button>
          </Form>
  
            <Nav className="join">
              <Nav.Link href="#home">회원가입</Nav.Link>
            </Nav>
        
            <Nav.Item className='login'>
                <Nav.Link href="/login">로그인</Nav.Link>
            </Nav.Item>
            <Nav className="mypage">
              <Nav.Link href="#home"><img src="img/mypage2.png" width="180" alt="마이페이지"/></Nav.Link>
           </Nav>
           <Nav className="alarm">
              <Nav.Link href="#home"><img src="img/alarm.png" width="130" alt="알람"/></Nav.Link>
           </Nav>
         
         
      
        
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;