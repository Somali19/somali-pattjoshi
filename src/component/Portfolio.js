import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { CardDeck} from "react-bootstrap";
import { Card} from "react-bootstrap";

import './Portfolio.css';
import fodie from './foodie.png';
import edu from './edu.png';
import uides3 from './uideg3.jpg';
import mhub from './medihub.png';
import uides1 from './uideg1.png';
import des1 from './3d-des.png';
import webdeg1 from './webdeg1.png';
import uides4 from './uideg4.jpg';
import VisibilityIcon from '@material-ui/icons/Visibility';

const Portfolio = () => {
<<<<<<< HEAD
  
=======
   
>>>>>>> dbe5ef73b711db4773211af68514d7a3ad661e3a
  return (
      <div>
        <h2 className="wk">  WORK </h2>
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
    <Card.Img variant="top" className="h" src={fodie} />
    <Card.Body>
      <Card.Title>Foodie</Card.Title>
      <Card.Text>
      <Badge className="bd">HTML</Badge> &nbsp;
      <Badge className="bd">CSS</Badge> &nbsp;
      <Badge className="bd">Bootstrap</Badge> &nbsp;
      <Badge className="bd">jQuery</Badge> &nbsp;
      <Badge className="bd">JavaScript</Badge> <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd" > &nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
     
      </Card.Text>
    </Card.Body>
  
  </Card> 
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={edu} />
    <Card.Body>
      <Card.Title>EduHub</Card.Title>
      <Card.Text>
      <Badge className="bd">HTML</Badge> &nbsp;
      <Badge className="bd">CSS</Badge> &nbsp;
      <Badge className="bd">Bootstrap</Badge> &nbsp;
      <Badge className="bd">jQuery</Badge> &nbsp;
      <Badge className="bd">JavaScript</Badge> <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
   
  </Card>
  </CardDeck>
   <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={mhub} />
    <Card.Body>
      <Card.Title>MediHub</Card.Title>
      <Card.Text>
      <Badge className="bd">HTML</Badge> &nbsp;
      <Badge className="bd">CSS</Badge> &nbsp;
      <Badge className="bd">Bootstrap</Badge> &nbsp;
      <Badge className="bd">JavaScript</Badge><br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides1} />
    <Card.Body>
      <Card.Title>Recipe App Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge> &nbsp;
      <Badge className="bd">Canva</Badge> <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
  
  </Card>
  </CardDeck>
   <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={webdeg1} />
    <Card.Body>
      <Card.Title>StudyHub</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge>  <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides3} />
    <Card.Body>
      <Card.Title>Chat App Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Adobe XD</Badge><br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
    
  </Card>
  </CardDeck>
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
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides4} />
    <Card.Body>
      <Card.Title>Pet App Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Incscape</Badge> <br /> 
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

export default Portfolio;
