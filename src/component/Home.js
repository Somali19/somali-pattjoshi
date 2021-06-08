import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Home.css';
import pic from './somali-pics.png';




const Home = ( ) => {
  return (
    
      <div className="back">
        <Container>
        <Row>
    <Col>
        <h1 className="he"> HELLO! </h1>
       <h3 className="hi"> This is Somali Pattjoshi. </h3>
       <h5 className="sub"> Web Developer and Designer || UI/UX Designer </h5>
       
      <hr className="lines" />
<div className="icons">
 <Row>  <Col>
   <a href="https://www.linkedin.com/in/somali-pattjoshi-03748b196">  <LinkedInIcon className="ico" /> </a>
     </ Col>
     <Col>
   <a href= "mailto: somalipattjoshi19@gmail.com"><i class="far fa-envelope"></i> </a>
   </ Col>
   <Col>
  <a href="https://github.com/Somali19"><GitHubIcon className="ico" /> </a>
   </Col>
   <Col>
   <a href="https://www.behance.net/somusomali"><i class="fab fa-behance"></i>  </a>
   </Col>
   <Col>
  <a href="https://www.instagram.com/_s_o_m_a_l_i/">< InstagramIcon className="ico" /> </a>
    </Col>
   </Row>
   </div>
    </Col>
    
    <Col>
    <img src={pic} alt="pic" className="bg" />
    </Col>
   
   
  </Row>
   
        </Container>


      </div>
  
 
  )
}

export default Home;