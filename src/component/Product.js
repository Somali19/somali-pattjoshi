import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { CardDeck} from "react-bootstrap";
import { Card} from "react-bootstrap";
import './Portfolio.css';
import prod1 from './prod1.png';
import prod2 from './prod2.png';

import VisibilityIcon from '@material-ui/icons/Visibility';
import {NavLink} from 'react-router-dom';
const Product = () => {
  return (
      <div>
         <h2 className="wk">  PRODUCT DESIGN</h2>
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
      <Col>
      <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={prod1} />
    <Card.Body>
      <Card.Title>Medicare</Card.Title>
      <Card.Text>
      <Badge className="bd">Illlustrator</Badge> &nbsp;
      <Badge className="bd">Figma</Badge> &nbsp;
      <Badge className="bd">Canva</Badge>  <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
  
  </Card> 
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={prod2} />
    <Card.Body>
      <Card.Title>Fresh Milk</Card.Title>
      <Card.Text>
      <Badge className="bd">Inkscape</Badge> &nbsp;
      <Badge className="bd">Canva</Badge> <br /> 
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

export default Product;