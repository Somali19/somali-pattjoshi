import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
function Navv() {
    return (
        <div className="Navv">
          <header className="Navbar-header">
        
          <Navbar collapseOnSelect bg="white" expand="lg" className="shadow p-3 bg-white rounded"> 
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
        <Nav.Link eventKey="1" as={Link} to="/" className="co">   Home  </Nav.Link>
          <Nav.Link eventKey="2" as={Link} to="/about" className="co"> About </Nav.Link>
          <Nav.Link eventKey="3" as={Link} to="/portfolio" className="co"> Work </Nav.Link>
               <Nav.Link eventKey="4" as={Link} to="/contact" className="co"> Contact </Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
    </header>
     
      </div>
      
      );
      
} 


export default Navv;

