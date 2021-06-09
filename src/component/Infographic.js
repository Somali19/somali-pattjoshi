import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { CardDeck} from "react-bootstrap";
import { Card} from "react-bootstrap";
import './Portfolio.css';
import inf1 from './info1.png';
import inf2 from './info2.png';
import inf3 from './info3.png';
import inf4 from './info4.png';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {NavLink} from 'react-router-dom';
const Infographic = () => {
  return (
      <div>
         <h2 className="wk">  INFOGRAPHIC</h2>
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
      <Col sm>
      <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="hl" src={inf1} />
    <Card.Body>
      <Card.Title>Foodie</Card.Title>
      <Card.Text>
      <Badge className="bd">COVID-19</Badge>  <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
  
  </Card> 
  <Card className="cards cd">
    <Card.Img variant="top" className="hl" src={inf2} />
    <Card.Body>
      <Card.Title>Calligraphy</Card.Title>
      <Card.Text>
      <Badge className="bd">Canva</Badge><br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
   
  </Card>
  </CardDeck>
   
  <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="hl" src={inf3} />
    <Card.Body>
      <Card.Title>Star's</Card.Title>
      <Card.Text>
      <Badge className="bd">Canva</Badge>  <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
  
  </Card> 
  <Card className="cards cd">
    <Card.Img variant="top" className="hl" src={inf4} />
    <Card.Body>
      <Card.Title>Composition</Card.Title>
      <Card.Text>
      <Badge className="bd">Canva</Badge>  <br /> 
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

export default Infographic;
