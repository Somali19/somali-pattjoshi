import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { CardDeck} from "react-bootstrap";
import { Card} from "react-bootstrap";
import './Portfolio.css';
import fodie from './foodie.png';
import edu from './edu.png';
import ecom from './ecom.png';
import farm from './farm.png';
import mhub from './medihub.png';
import place from './place.png';
import cogent from './cogent.png';
import medicare from './medicare.png';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {NavLink} from 'react-router-dom';
const Webdev = () => {
  return (
      <div>
         <h2 className="wk">  WEB DEVELOPMENT</h2>
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
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
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
    <Card.Img variant="top" className="h" src={ecom} />
    <Card.Body>
      <Card.Title>E-commerce Website</Card.Title>
      <Card.Text>
      <Badge className="bd">HTML</Badge> &nbsp;
      <Badge className="bd">CSS</Badge> &nbsp;
      <Badge className="bd">Bootstrap</Badge> &nbsp;
      <Badge className="bd">JavaScript</Badge> <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={farm} />
    <Card.Body>
      <Card.Title>AZ Farm</Card.Title>
      <Card.Text>
      <Badge className="bd">HTML</Badge> &nbsp;
      <Badge className="bd">CSS</Badge> &nbsp;
      <Badge className="bd">Materialize CSS</Badge> &nbsp;
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
      <Badge className="bd">JavaScript</Badge> <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={place} />
    <Card.Body>
      <Card.Title>Place to visit</Card.Title>
      <Card.Text>
      <Badge className="bd">HTML</Badge> &nbsp;
      <Badge className="bd">CSS</Badge> &nbsp;
      <Badge className="bd">WebAR</Badge> <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
    
  </Card>
  </CardDeck>
   <CardDeck className="cards">
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={cogent} />
    <Card.Body>
      <Card.Title>Cogent</Card.Title>
      <Card.Text>
      <Badge className="bd">HTML</Badge> &nbsp;
      <Badge className="bd">CSS</Badge> &nbsp;
      <Badge className="bd">Bootstrap</Badge> <br /> 
      <hr/>
      <small className="text-muted"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </small>
    
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={medicare} />
    <Card.Body>
      <Card.Title>MediCare</Card.Title>
      <Card.Text>
      <Badge className="bd">HTML</Badge> &nbsp;
      <Badge className="bd">CSS</Badge> &nbsp;
      <Badge className="bd">Bootstrap</Badge> &nbsp;
      <Badge className="bd">JavaScript</Badge> <br /> 
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

export default Webdev;