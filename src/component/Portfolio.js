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
import webdeg1 from './webdeg1.png';
import uides4 from './uideg4.jpg';

import uides6 from './uideg5.png';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Portfolio = () => {
  AOS.init({
    duration : 3000
  })
  AOS.refresh();
  return (
      <div >
        <h2 className="wk" data-aos="fade-in">  WORK </h2>
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
  </Badge> </NavLink> 
  <br />
  <NavLink to="/portfolio/casestudy" className="co">  <Badge pill className="bd hvr-float-shadow">
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
      <Badge className="bd ">HTML</Badge> &nbsp;
      <Badge className="bd">CSS</Badge> &nbsp;
      <Badge className="bd">Bootstrap</Badge> &nbsp;
      <Badge className="bd">jQuery</Badge> &nbsp;
      <Badge className="bd">JavaScript</Badge> <br /> 
      <hr/>
      <small className="text-muted"><a href="https://somali19.github.io/wee-foodiee"> <Badge className="bd hvr-round-corners" > &nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </a> </small>
     
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
      <small className="text-muted"><a href="https://somali19.github.io/EduHub-web/"> <Badge className="bd hvr-round-corners">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </a> </small>
    
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
      <small className="text-muted"> <a href="https://somali19.github.io/medihub0/"> <Badge className="bd hvr-round-corners">&nbsp; View &nbsp;<VisibilityIcon /> &nbsp; </Badge> </a> </small>
    
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
      <small className="text-muted"> <br /></small>
    
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
      <small className="text-muted"> <br /></small>
    
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
     <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
    
  </Card>
  </CardDeck>
   <CardDeck className="cards">
   <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides6} />
    <Card.Body>
      <Card.Title>Music App Design</Card.Title>
      <Card.Text>
      <Badge className="bd">Figma</Badge> 
     
      <hr/>
      <small className="text-muted"> <br /></small>
    
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card className="cards cd">
    <Card.Img variant="top" className="h" src={uides4} />
    <Card.Body>
      <Card.Title>Pet App Design</Card.Title>
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

export default Portfolio;
