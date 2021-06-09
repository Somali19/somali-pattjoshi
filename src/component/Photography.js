import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { CardDeck} from "react-bootstrap";
import { Card} from "react-bootstrap";
import './Portfolio.css';
import ext from './ext.png';

import VisibilityIcon from '@material-ui/icons/Visibility';
import {NavLink} from 'react-router-dom';
const Photography = () => {
  return (
      <div>
         <h2 className="wk">  PHOTOGRAPHY</h2>
        <hr className="liinee" />
        <Container >
      <Row>
      <Col sm={4}>
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
  
  <NavLink to="/portfolio/infographic" className="co"><Badge pill className="bd">
   Infographic
  </Badge> </NavLink> <br />
  <NavLink to="/portfolio/photography" className="co"> <Badge pill className="bd">
    Photography
  </Badge> </NavLink>
  
      </Col>

      <Col sm={8}>

      <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={ext} />
    <Card.Body>
      <Card.Title>Coming soon</Card.Title>
      <Card.Text>
      Coming soon<br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
  
  </Card> 
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={ext} />
    <Card.Body>
      <Card.Title>Coming soon</Card.Title>
      <Card.Text>
      Coming soon<br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
   
  </Card>
  </CardDeck>
   <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={ext} />
    <Card.Body>
      <Card.Title>Coming soon</Card.Title>
      <Card.Text>
      Coming soon<br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={ext} />
    <Card.Body>
      <Card.Title>Coming soon</Card.Title>
      <Card.Text>
      Coming soon<br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
  
  </Card>
  </CardDeck>
   <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={ext} />
    <Card.Body>
      <Card.Title>Coming soon</Card.Title>
      <Card.Text>
      Coming soon <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={ext} />
    <Card.Body>
      <Card.Title>Coming soon</Card.Title>
      <Card.Text>
      Coming soon <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
    
  </Card>
  </CardDeck>
   <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={ext} />
    <Card.Body>
      <Card.Title>Coming soon</Card.Title>
      <Card.Text>
      Coming soon <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={ext} />
    <Card.Body>
      <Card.Title>Coming soon</Card.Title>
      <Card.Text>
      Coming soon <br /> 
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

export default Photography;
