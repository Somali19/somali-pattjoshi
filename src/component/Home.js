import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import './Home.css';
import pic from './somali-pics.png';




const Home = ( ) => {
  return (
    
      <div className="back">
        <Container>
        <Row>
    <Col sm>
        <h1 className="he"> HELLO! </h1>
       <h3 className="hi"> This is Somali Pattjoshi. </h3>
       <h5 className="sub"> Web Developer and Designer || UI/UX Designer </h5>
       
      <hr className="lines" />
    <br />
     <a href="https://www.linkedin.com/in/somali-pattjoshi-03748b196">  <i class="fab fa-linkedin-in"></i></a> 
  &nbsp; &nbsp;
  <a href= "mailto: somalipattjoshi19@gmail.com"><i class="far fa-envelope"></i> </a>
  &nbsp; &nbsp;
  <a href="https://github.com/Somali19"><i class="fab fa-github"></i></a>
  &nbsp; &nbsp;
 <a href="https://www.behance.net/somusomali"><i class="fab fa-behance"></i>  </a>
 &nbsp; &nbsp;

  <a href="https://www.instagram.com/_s_o_m_a_l_i/"><i class="fab fa-instagram"></i> </a>
 

    </Col>
    
    <Col sm>
    <img src={pic} alt="pic" className="bg" />
    </Col>
   
   
  </Row>

   
        </Container>


      </div>
  
 
  )
}

export default Home;
