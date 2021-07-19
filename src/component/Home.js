import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Home.css';
import pic from './somali-pics.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';


const Home = ( ) => {
  AOS.init({
    duration : 3000
  })
  AOS.refresh();
  return (
    
      <div className="back">
        <Container>
        <Row>
    <Col sm>
        <h1 className="he" data-aos="zoom-in"> HELLO! </h1>
       <h3 className="hi" data-aos="zoom-out"> This is Somali Pattjoshi. </h3>
       <h5 className="sub" >  <Typewriter 
  options={{
    strings: ['Web Developer', 'Web Designer', 'UI/UX Designer', 'Open Source Contributor' ],
    autoStart: true,
    loop: true,
    duration : 5000
  }}
/> </h5>
      
      <hr className="lines" />
    <br />
     <a href="https://www.linkedin.com/in/somali-pattjoshi-03748b196">  <i class="fab fa-linkedin-in" data-aos="zoom-out-up"></i></a> 
  &nbsp; &nbsp;
  <a href= "mailto: somalipattjoshi19@gmail.com"><i class="far fa-envelope" data-aos="zoom-out-up"></i> </a>
  &nbsp; &nbsp;
  <a href="https://github.com/Somali19"><i class="fab fa-github" data-aos="zoom-out-up"></i></a>
  &nbsp; &nbsp;
 <a href="https://www.behance.net/somusomali"><i class="fab fa-behance" data-aos="zoom-out-up"></i>  </a>
 &nbsp; &nbsp;

  <a href="https://dribbble.com/__Somali__"><i class="fab fa-dribbble" data-aos="zoom-out-up"></i> </a>
 

    </Col>
    
    <Col sm>
    <img src={pic} alt="pic" className="bg" data-aos="zoom-in-up" />
    </Col>
   
   
  </Row>

   
        </Container>

       </div>
  
 
  )
}

export default Home;
