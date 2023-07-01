import React from 'react'
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
//  import Sidebar from './Sidebar';
import { } from './App';
 import Content from './Content';
// import Apps from "./Apps"\
// import Apps from './Apps';
function Caluculator() {

  return (
    <>
      <Navbar style={{ backgroundColor: "skyblue" }}>
        <Container>
          {/* <div>
  <Sidebar />
</div> */}
          <Navbar.Brand href="#home" className="justify-content-start">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ marginTop: "30px" }}>
        <Content />
{/* <Apps /> */}
      </div>
    </>
  );
}

export default Caluculator
