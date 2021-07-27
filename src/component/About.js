import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar, buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import pic from './somuu.png';
const About = () => {
  AOS.init({
    duration : 3000
  })
  AOS.refresh();
  const percentage = 20;
  return (
      <div>
      <h2 className="abt" data-aos="fade-in"> ABOUT </h2>
      <hr className="liinee" data-aos="fade-in" />
      <Container className="abt" >
      <Row >
      <Col>
       <img src={pic} alt="pic" className="bgg" data-aos="zoom-in-up" />
      </Col>

<Col data-aos="zoom-in-down">
<Row data-aos="fade-in">
<Col className="cont">
  <ul> <li> I am a 4th year Undergraduate students at GIET University, Gunupur. </li> <br /> <li> My Domain is Computer Science and I am intrested in the field of Web Development, Web Design and UI/UX Design. </li> <br /> <li> I have good knowledge of Front-end techniques and modern Web and UI design trends. </li> <br /> <li> I loves building user-friendly websites and I am also an open-source enthusiast.  </li> </ul>
  
</Col>
</Row>

</Col>
      </Row>

     <Row data-aos="fade-in">
       <Col sm>
       <div className="cont1"> 
SKILLS </div> <br />
       <Row>
         <Row>
       <Col>
<div label="Stroke width " className="txt">
      <CircularProgressbar 
        value={90}
        text={`90%`}
        strokeWidth={5} styles={buildStyles({
          textColor: "#9461D6",
          pathColor: "#9461D6"
        })}
        
      />
      HTML
    </div>
    </Col>
  
    <Col>
<div label="Stroke width " className="txt">
      <CircularProgressbar
        value={80}
        text={`80%`} 
        strokeWidth={5} styles={buildStyles({
          textColor: "#9461D6",
          pathColor: "#9461D6"
        })}
      />
      CSS
    </div>
    </Col>
    <Col>
<div label="Stroke width " className="txt">
      <CircularProgressbar
        value={60}
        text={`60%`} 
        strokeWidth={5} styles={buildStyles({
          textColor: "#9461D6",
          pathColor: "#9461D6"
        })}
      />
      SCSS
    </div>
    </Col>
    <Col>
<div label="Stroke width " className="txt ">
      <CircularProgressbar
        value={80}
        text={`80%`}
        strokeWidth={5} styles={buildStyles({
          textColor: "#9461D6",
          pathColor: "#9461D6"
        })}
      />
      Bootstrap
    </div>
    </Col>
    </Row>
    <Row>
    <Col>
<div label="Stroke width" className="txt">
      <CircularProgressbar 
        value={50}
        text={`50`}
        strokeWidth={5} styles={buildStyles({
          textColor: "#9461D6",
          pathColor: "#9461D6"
        })}
        
      />
      JavaScript
    </div>
    </Col>
    <Col>
<div label="Stroke width" className="txt">
      <CircularProgressbar 
        value={80}
        text={`80%`}
        strokeWidth={5} styles={buildStyles({
          textColor: "#9461D6",
          pathColor: "#9461D6"
        })}
        
      />
      Responsive Design
    </div>
    </Col>
    <Col>
<div label="Stroke width" className="txt">
      <CircularProgressbar
        value={75}
        text={`75%`} 
        strokeWidth={5} styles={buildStyles({
          textColor: "#9461D6",
          pathColor: "#9461D6"
        })}
      />
     Tailwind CSS
    </div>
    </Col>
    <Col>
<div label="Stroke width " className="txt ">
      <CircularProgressbar
        value={70}
        text={`70%`}
        strokeWidth={5} styles={buildStyles({
          textColor: "#9461D6",
          pathColor: "#9461D6"
        })}
      />
      Materialize CSS
    </div>
    </Col>
    </Row>
    <Row>
    <Col>
  
  <div label="Stroke width" className="txt hvr-float">
        <CircularProgressbar 
          value={80}
          text={`80%`}
          strokeWidth={5} styles={buildStyles({
            textColor: "#9461D6",
            pathColor: "#9461D6"
          })}
          
        />
        C
      </div>
      </Col>
      <Col>
  <div label="Stroke width" className="txt hvr-float">
        <CircularProgressbar 
          value={75}
          text={`75%`}
          strokeWidth={5} styles={buildStyles({
            textColor: "#9461D6",
            pathColor: "#9461D6"
          })}
          
        />
        C++
      </div>
      </Col>
      <Col>
  <div label="Stroke width" className="txt hvr-float">
        <CircularProgressbar
          value={60}
          text={`60%`} 
          strokeWidth={5} styles={buildStyles({
            textColor: "#9461D6",
            pathColor: "#9461D6"
          })}
        />
        Java
      </div>
      </Col>
      <Col>
<div label="Stroke width " className="txt ">
      <CircularProgressbar
        value={60}
        text={`60%`}
        strokeWidth={5} styles={buildStyles({
          textColor: "#9461D6",
          pathColor: "#9461D6"
        })}
      />
      PHP
    </div>
    </Col>
      </Row>
   </Row>
    </Col>
<br />  <br />
<br />  <br />
       <Col sm>
       <div className="cont1"> 
TOOLS </div> <br />
       

       <Row>
<Col>
<ProgressBar className="txt" variant={"prog"} animated now={90} label={`Github`}  /> <br />
<ProgressBar className="txt" variant={"prog"} animated now={100} label={`Sublime text`}  /> <br />
<ProgressBar className="txt" variant={"prog"} animated now={90} label={`Visual Studio Code`}  /> <br />
<ProgressBar className="txt" variant={"prog"} animated now={80} label={`Figma`}  /> <br />
<ProgressBar className="txt" variant={"prog"} animated now={80} label={`Jupyter Notebook`}  /> <br />
</Col>
         </Row>
         <Row>
           <Col>
           <ProgressBar className="txt" variant={"prog"} animated now={90} label={`Google Colab`}  /> <br />
<ProgressBar className="txt" variant={"prog"} animated now={80} label={`Adobe XD`}  /> <br />
<ProgressBar className="txt" variant={"prog"} animated now={60} label={`Adobe Photoshop`}  /> <br />
<ProgressBar className="txt" variant={"prog"} animated now={60} label={`Adobe Illustrator`}  />

           </Col>
         
         </Row>
       </Col>
     </Row>

     
        <Row data-aos="fade-in">
<Col>
<div className="cont1"> 
EXPERIENCE </div> <br />
<ul>
<li><div className="cont2 m">Web Developer Intern at The Sparks Foundation </div>  </li>
<li> <div className="cont2 m">Web Design Intern at Internship Studio</div>  </li>
<li> <div className="cont2 m">Representative of Google Crowdsource</div>  </li>
</ul>
</Col>
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


</Row>
</Container>
     </div>
  )
}

export default About;