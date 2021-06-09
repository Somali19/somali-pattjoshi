import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import './Contact.css';
const Contact = () => {
  return (
      <div>
         <h2 className="wk">  CONTACT</h2>
        <hr className="liinee" />
        <Container>
          <Row >
            <Col className="cnt">
            
            <br />
            <br />
            <br />
            <br />
          
            <br />
            <br />
       <Card className="cdd soc" style={{width: "24rem" }}> 
       <Card.Body className="cont3">  Any Message? Drop your message here! <Card.Text>  <br /><br />
            <br /> <Form className="frm">
  <Form.Group controlId="formBasicEmail">
  
    <Form.Control type="email" placeholder="Enter Email" />
  </Form.Group>
  
  <Form.Group controlId="formBasicMessage">
  <Form.Control type="text" placeholder="Message" />
  </Form.Group>
  <br />
  <Button className="bt" type="submit">
    Submit
  </Button>
 
 
</Form> </Card.Text>   </Card.Body>
</Card> 

       
            </Col>
            <Col className="cnt">
           
            <br />
            <br />
           <div className="loc cont3" > Location  </div>  
         
            <div className="mapp" style= {{width: "100%"}}><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=junagarh%20,%20kalahandi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                </Col>
            
          </Row>
          <br />
          <br />
          <br />

          <div className="soc cont3"> 
        
          Find me on social media -
          <br />
          <hr className="liinee" />
          <br />
          <br />
        <Col>
       
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
   
 </div>
<br />
<br />
<i class="fab fa-gratipay"></i>
<br />
<div className="cont3">Thank you for visiting. </div>
   
        </Container>
      </div>
  )
}

export default Contact;
