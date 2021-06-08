import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Badge } from "react-bootstrap";

import './About.css';
import pic from './somuu.png';
const About = () => {
  return (
      <div>
      <h2 className="abt"> ABOUT </h2>
      <hr className="liinee" />
      <Container className="abt">
      <Row>
      <Col>
       <img src={pic} alt="pic" className="bgg" />
      </Col>

<Col>
<Row>
<Col className="cont">
  <ul> <li> I am a 3rd year Undergraduate students at GIET University, Gunupur. </li> <br /> <li> My Domain is Computer Science and I am intrested in the field of Web Development, Web Design and UI/UX Design. </li> <br /> <li> I have good knowledge of Front-end techniques and modern Web and UI design trends. </li> <br /> <li> I loves building user-friendly websites and I am also an open-source enthusiast.  </li> </ul>
  
</Col>
</Row>
<Row>
<Col >
<div className="cont1"> SKILLS </div><br />
<Badge className="bd">HTML</Badge>  <Badge className="bd"> CSS </Badge>  <Badge className="bd"> SCSS </Badge> <Badge className="bd">  Responsive Web Design </Badge>   <Badge className="bd"> Bootstrap </Badge>  <Badge className="bd">  Materialize CSS </Badge> <Badge className="bd">  Tailwind CSS  </Badge>  <Badge className="bd"> JavaScript </Badge> <Badge className="bd">  JQuery </Badge> <Badge className="bd">  PHP </Badge> <Badge className="bd">  React JS </Badge>  <Badge className="bd">  C </Badge>  <Badge className="bd">   C++  </Badge>  <Badge className="bd">  Java </Badge>  <Badge className="bd">   Python  </Badge> 

</Col>
<Col>
<div className="cont1"> 
EXPERIENCE </div> <br />
<ul>
<li><div className="cont2 m">Web Developer Intern at The Sparks Foundation </div>  </li>
<li> <div className="cont2 m">Web Design Intern at Internship Studio</div>  </li>
<li>
<div className="cont2 m">
Graphic Designer at Girlscript Gunupur</div>  </li>
<li>
<div className="cont2">
Campus SuperHero at Coding Blocks </div>
</li>
</ul>
</Col>
</Row>
<Row>
<Col>

<div className="cont1"> 
CERTIFICATION </div> <br />
<ul>
<li> <div className="cont2 m">
The Complete Front-End Web Development Course from Udemy </div> </li>
<li> <div className="cont2 m">
Full-Stack Web Development with React from Coursera</div> </li>
<li>
 <div className="cont2 m">
 UI / UX Design from Coursera
</div>
</li>
</ul>
<br />
<br />
 <br />
<br />

</Col>

<Col>
<div className="cont1"> 
TOOLS </div> <br />
<Badge className="bd">GitHub </Badge> <Badge className="bd">   Sublime text </Badge> <Badge className="bd">     Visual Studio Code  </Badge> <Badge className="bd">    Figma </Badge> <Badge className="bd">     Jupyter Notebook  </Badge> <Badge className="bd">    Google Colab </Badge> <Badge className="bd">     Adobe XD  </Badge> <Badge className="bd">    Adobe Photoshop </Badge> <Badge className="bd">     Adobe Illustrator</Badge>
 <br />
<br />
</Col>
</Row>


      </Col>
      </Row>
</Container>
     </div>
  )
}

export default About;