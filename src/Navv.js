import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
function Navv() {
    return (
        <div className="Navv">
          <header className="Navbar-header">
        
          <Navbar bg="white" expand="lg" className="shadow p-3 bg-white rounded"> 
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link>
          <NavLink to="/" className="co">Home </NavLink>
          </Nav.Link>
          <Nav.Link>
          <NavLink to="/about" className="co"> About  </NavLink>
          </Nav.Link>
          <Nav.Link>
          <NavLink to="/portfolio" className="co"> Work  </NavLink>
          </Nav.Link>
               <Nav.Link>
               <NavLink to="/contact" className="co">Contact </NavLink>
                </Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
    </header>
     
      </div>
      
      );
      
} 
export default Navv;