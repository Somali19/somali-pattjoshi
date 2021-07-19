/* import logo from './logo.svg'; */
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Navv from "./Navv";
import Webdev from "./component/Webdev";
import Webdeg from "./component/Webdeg";
import Uideg from "./component/Uideg";
import Casestudy from "./component/Casestudy";


function App() {
 
  return (
    <>
    <Navv />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route path='/portfolio/web' component={Webdev} />
      <Route path='/portfolio/webdeg' component={Webdeg} />
      <Route path='/portfolio/uideg' component={Uideg} />
      <Route path='/contact' component={Contact} />
      <Route path='/portfolio/casestudy' component={Casestudy} />
    </Switch>
    </>
  );
};



export default App;
