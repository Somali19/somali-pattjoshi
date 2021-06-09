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
import VisibilityIcon from '@material-ui/icons/Visibility';
import {NavLink} from 'react-router-dom';
const Uideg = () => {
  return (
      <div>
         <h2 className="wk">  UI/UX DESIGN</h2>
        <hr className="linees" />
        <Container >
      <Row>
      <Col>
    <h4>  All Work </h4>
    <hr className="li" />
   
    <NavLink to="/portfolio/design" className="co"> <Badge pill className="bd">
    3D Design
  </Badge> </NavLink> <br />
  <NavLink to="/portfolio/webdeg" className="co">
  <Badge pill className="bd">
    Web Design
  </Badge> </NavLink> <br />
  <NavLink to="/portfolio/uideg" className="co">  <Badge pill className="bd">
    UI/UX Design
  </Badge> </NavLink> <br />
  <NavLink to="/portfolio/web" className="co"><Badge pill className="bd">
    Web Development 
  </Badge> </NavLink> <br />
  <NavLink to="/portfolio/product" className="co"> <Badge pill className="bd">
    Product Design
  </Badge> </NavLink> <br />
  <NavLink to="/portfolio/illustration" className="co"> <Badge pill className="bd">
   Illustration
  </Badge></NavLink> <br />
  <NavLink to="/portfolio/branding" className="co"> <Badge pill className="bd">
   Branding
  </Badge> </NavLink> <br />
  <NavLink to="/portfolio/infographic" className="co"><Badge pill className="bd">
   Infographic
  </Badge> </NavLink> <br />
  <NavLink to="/portfolio/photography" className="co"> <Badge pill className="bd">
    Photography
  </Badge> </NavLink>
      </Col>
      <Col sm>
      <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides1} />
    <Card.Body>
      <Card.Title>Recipe App</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge> &nbsp;
      <Badge className="bd">Canva</Badge> <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
  
  </Card> 
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides2} />
    <Card.Body>
      <Card.Title>Educational App</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge> <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
   
  </Card>
  </CardDeck>
   <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides3} />
    <Card.Body>
      <Card.Title>Chat App</Card.Title>
      <Card.Text>
      <Badge className="bd">Adobe XD</Badge> <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides4} />
    <Card.Body>
      <Card.Title>Pet App</Card.Title>
      <Card.Text>
      <Badge className="bd">Adobe XD</Badge> 
      &nbsp;
      <Badge className="bd">Canva</Badge><br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
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
