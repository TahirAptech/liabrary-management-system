import { Container, Navbar } from "react-bootstrap";

function NavBar() {
  return (
   <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <center>
          <Navbar.Brand href="#">Library Management System</Navbar.Brand>

          </center>
        </Container>
      </Navbar>
   </>
  );
}

export default NavBar;
