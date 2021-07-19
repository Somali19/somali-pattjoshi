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
import AOS from 'aos';
import 'aos/dist/aos.css';
const Webdev = () => {
  AOS.init({
    duration : 3000
  })
  AOS.refresh();
  return (
      <div >
        <h2 className="wk" data-aos="fade-in">  WEB DEVELOPMENT </h2>
        <hr className="liinee" data-aos="fade-in" />
         <Container data-aos="zoom-in-up">
      <Row>
      <Col sm={4}>
    <h4>  All Work </h4>
    <hr className="li" />
   
     
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
  <NavLink to="/portfolio/casestudy" className="co">  <Badge pill className="bd">
    Case Study
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
      <small className="text-muted"><a href="https://somali19.github.io/wee-foodiee"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </a> </small>
    
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
      <small className="text-muted"> <a href="https://somali19.github.io/EduHub-web/"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </a></small>
    
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
      <small className="text-muted"><a href="https://somali19.github.io/E-commerce-web/"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </a> </small>
    
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
      <small className="text-muted"><a href="https://somali19.github.io/farm/"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </a> </small>
    
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
      <small className="text-muted"> <a href="https://somali19.github.io/medihub0/"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </a> </small>
    
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
      <small className="text-muted"> <a href="https://somali19.github.io/Place-to-visit/"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </a> </small>
    
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
      <small className="text-muted"> <a href="https://somali19.github.io/COGENT/"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </a> </small>
    
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
      <small className="text-muted"> <a href="https://somali19.github.io/medicare/"> <Badge className="bd">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </a> </small>
    
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
