import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { CardDeck} from "react-bootstrap";
import { Card} from "react-bootstrap";
import './Portfolio.css';
import uides1 from './uideg1.png';
import uides2 from './uideg2.png';
import uides3 from './uideg3.jpg';
import uides4 from './uideg4.jpg';
import uides5 from './uideg4.png';
import uides6 from './uideg5.png';
import uides7 from './uideg6.jpg';
import uides8 from './uideg7.jpg';
import uides9 from './uideg8.png';
import uides10 from './uideg9.png';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {NavLink} from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
const Uideg = () => {
  AOS.init({
    duration : 3000
  })
  AOS.refresh();
  return (
      <div >
        <h2 className="wk" data-aos="fade-in">  UI/UX DESIGN </h2>
        <hr className="liinee" data-aos="fade-in" />
         <Container data-aos="zoom-in-up">
      <Row>
      <Col sm={4}>
    <h4>  All Work </h4>
    <hr className="li" />
   
   
  <NavLink to="/portfolio/webdeg" className="co">
  <Badge pill className="bd hvr-float-shadow">
    Web Design
  </Badge> </NavLink> <br />
  <NavLink to="/portfolio/uideg" className="co">  <Badge pill className="bd hvr-float-shadow">
    UI/UX Design
  </Badge> </NavLink> <br />
  <NavLink to="/portfolio/web" className="co"><Badge pill className="bd hvr-float-shadow">
    Web Development 
  </Badge> </NavLink> <br />
 
  <NavLink to="/portfolio/casestudy" className="co">  <Badge pill className="bd hvr-float-shadow">
    Case Study
  </Badge> </NavLink>
      </Col>

      <Col sm={8}>
   <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides1} />
    <Card.Body>
      <Card.Title>Recipe App Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge> &nbsp;
      <Badge className="bd">Canva</Badge> <br /> 
      <hr/>
      <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
  
  </Card> 
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides2} />
    <Card.Body>
      <Card.Title>Educational App Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge> <br /> 
      <hr/>
      <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
   
  </Card>
  </CardDeck>
   <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides3} />
    <Card.Body>
      <Card.Title>Chat App Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Adobe XD</Badge> <br /> 
      <hr/>
      <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides4} />
    <Card.Body>
      <Card.Title>Pet App Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Adobe XD</Badge> 
      &nbsp;
      <Badge className="bd">Canva</Badge><br /> 
      <hr/>
      <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
  
  </Card>
  </CardDeck>
  <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides5} />
    <Card.Body>
      <Card.Title>ManageMe App Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge> 
      &nbsp;
      <Badge className="bd">Canva</Badge><br /> 
      <hr/>
      <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides6} />
    <Card.Body>
      <Card.Title>Music App Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge> 
     
      <hr/>
      <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
  
  </Card>
  </CardDeck>
  <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides7} />
    <Card.Body>
      <Card.Title>Food App Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge> 
      <hr/>
      <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides8} />
    <Card.Body>
      <Card.Title>Login/Signup Page Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge> 
     
      <hr/>
      <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
  
  </Card>
  </CardDeck>
  <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides9} />
    <Card.Body>
      <Card.Title>Netflix App Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge> 
      <hr/>
      <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides10} />
    <Card.Body>
      <Card.Title>Food Delivery App Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Adoobe XD</Badge> 
     
      <hr/>
      <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
  
  </Card>
  </CardDeck>
      </Col>
      </Row>
      </Container>
      
      </div>
  )
}


export default Uideg;

