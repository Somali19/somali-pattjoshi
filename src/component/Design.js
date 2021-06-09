import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { CardDeck} from "react-bootstrap";
import { Card} from "react-bootstrap";
import './Portfolio.css';
import des1 from './3d-des.png';
import des2 from './3d-des1.png';
import des3 from './3d-des2.png';
import ext from './ext.png';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {NavLink} from 'react-router-dom';
const Design = () => {
  return (
      <div>
         <h2 className="wk">  3D DESIGN</h2>
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
    <Card.Img variant="top" className="h" src={des1} />
    <Card.Body>
      <Card.Title>Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge> &nbsp;
      <Badge className="bd">Inkscape</Badge> &nbsp;
      <Badge className="bd">Canva</Badge>  <br /> 
      <hr/>
     <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
  
  </Card> 
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={des2} />
    <Card.Body>
      <Card.Title>The Sun</Card.Title>
      <Card.Text>
      <Badge className="bd">Inkscape</Badge> &nbsp;
      <Badge className="bd">Canva</Badge> &nbsp;
      <Badge className="bd">Illustrator</Badge> <br /> 
      <hr/>
     <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
   
  </Card>
  </CardDeck>
   <CardDeck className="cards">
  <Card className="cards cd ">
    <Card.Img variant="top" className="h" src={des3} />
    <Card.Body>
      <Card.Title>3D Text</Card.Title>
      <Card.Text>
     
      <Badge className="bd">Canva</Badge> &nbsp;
      <Badge className="bd">Photoshop</Badge> <br /> 
      <hr/>
      <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
   
  </Card>
   <Card className="cards cd ">
    <Card.Img variant="top" className="h" src={ext} />
    <Card.Body>
      <Card.Title>Coming Soon</Card.Title>
      <Card.Text>
     <br /> <br /> 
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

export default Design;
