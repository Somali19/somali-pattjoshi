import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { CardDeck} from "react-bootstrap";
import { Card} from "react-bootstrap";
import './Portfolio.css';
import webdeg1 from './webdeg1.png';
import webdeg2 from './webdeg2.png';
import webdeg3 from './webdeg3.png';
import webdeg4 from './webdeg4.png';
import webdeg5 from './webdeg5.png';
import webdeg6 from './webdeg6.png';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {NavLink} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Webdeg = () => {
  AOS.init({
    duration : 3000
  })
  AOS.refresh();
  return (
      <div >
        <h2 className="wk" data-aos="fade-in">  WEB DESIGN </h2>
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
    <Card.Img variant="top" className="h" src={webdeg5} />
    <Card.Body>
      <Card.Title>Virtual Medical Scribe Website Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge>  <br /> 
      <hr/>
     <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
  
  </Card> 
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={webdeg4}/>
    <Card.Body>
      <Card.Title>Bike Rental Website Design</Card.Title>
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
    <Card.Img variant="top" className="h" src={webdeg3} />
    <Card.Body>
      <Card.Title>Hospital Finder Website Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge>  <br /> 
      <hr/>
     <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
  
  </Card> 
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={webdeg6}/>
    <Card.Body>
      <Card.Title>Bank Website Design</Card.Title>
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
    <Card.Img variant="top" className="h" src={webdeg1} />
    <Card.Body>
      <Card.Title>Educational Website Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge>  <br /> 
      <hr/>
     <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
  
  </Card> 
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={webdeg2}/>
    <Card.Body>
      <Card.Title>Coming Soon Page Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge> <br /> 
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

export default Webdeg;
