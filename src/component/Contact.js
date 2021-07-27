import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

import pic from './somali-pics.png';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  AOS.init({
    duration : 3000
  })
  AOS.refresh();
  return (
<div>
         <h2 className="wk" data-aos="fade-in">  CONTACT</h2>
        <hr className="liinee" data-aos="fade-in" />
        <Container data-aos="zoom-in-up">
        <br />
            <br />
            <Row>
              <Col sm>
              <br />
            <br />
            <br />
            <br />
            <br />
            <br />
       <Card className="cdd soc"> 
       <Card.Body className="cont3">   Find me here -
          <br />
          <hr className="liinee" />
          <br />
          <br />
            
            <a href="https://www.linkedin.com/in/somali-pattjoshi-03748b196" className="hvr-bounce-in">  <i class="fab fa-linkedin-in"></i></a> 
    &nbsp; &nbsp;
      <a href= "mailto: somalipattjoshi19@gmail.com" className="hvr-bounce-in"><i class="far fa-envelope"></i> </a>
  &nbsp; &nbsp;
      <a href="https://github.com/Somali19" className="hvr-bounce-in"><i class="fab fa-github"></i></a>
  &nbsp; &nbsp;
  <a href="https://www.behance.net/somusomali" className="hvr-bounce-in"><i class="fab fa-behance"></i>  </a>
  &nbsp; &nbsp;
  <a href="https://dribbble.com/__Somali__" className="hvr-bounce-in"><i class="fab fa-dribbble"></i> </a>
  
     </Card.Body>
  </Card> 
  </Col>
  <Col sm>
  <div className="loc1 cont3" > Location -  </div>  

           
         

    <div className="mapp" style= {{width: "100%"}}><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=junagarh%20,%20kalahandi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
    <br />

  </Col>
  </Row>
  <br />
  <div className="hvr-bounce-in"><i class="fab fa-gratipay" ></i> </div>
    <br />
  <div className="cont3">Thank you for visiting. 
  <br /> <br />
    </div>
          </Container>
       
</div>
  )
}

export default Contact;
