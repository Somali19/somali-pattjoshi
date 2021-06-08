import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { CardDeck} from "react-bootstrap";
import { Card} from "react-bootstrap";
import './Portfolio.css';
import ill1 from './il1.png';
import ill2 from './il2.png';
import ill3 from './il3.png';
import ill4 from './il4.png';

import VisibilityIcon from '@material-ui/icons/Visibility';
import {NavLink} from 'react-router-dom';
const Illustration = () => {
  return (
      <div>
         <h2 className="wk">  ILLUSTRATION</h2>
        <hr className="liinee" />
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
      <Col>
      <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={ill1} />
    <Card.Body>
      <Card.Title>Scenery Illustration</Card.Title>
      <Card.Text>
      <Badge className="bd">Incscape</Badge> <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
  
  </Card> 
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={ill2} />
    <Card.Body>
      <Card.Title>Scenery Illustration</Card.Title>
      <Card.Text>
      <Badge className="bd">Incscape</Badge>  <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
   
  </Card>
  </CardDeck>
   <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={ill3} />
    <Card.Body>
      <Card.Title>Landscape Illustration</Card.Title>
      <Card.Text>
      <Badge className="bd">Illustrator</Badge>  <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={ill4} />
    <Card.Body>
      <Card.Title>Scenery Illustration</Card.Title>
      <Card.Text>
      <Badge className="bd">Inkscape</Badge> <br /> 
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

export default Illustration;