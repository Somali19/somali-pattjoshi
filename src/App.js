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
import Branding from "./component/Branding";
import Photography from "./component/Photography";
import Infographic from "./component/Infographic";
import Illustration from "./component/Illustration";
import Product from "./component/Product";
import Uideg from "./component/Uideg";
import Design from "./component/Design";

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
      <Route path='/portfolio/branding' component={Branding} />
      <Route path='/portfolio/photography' component={Photography} />
      <Route path='/portfolio/infographic' component={Infographic} />
      <Route path='/portfolio/illustration' component={Illustration} />
      <Route path='/portfolio/product' component={Product} />
      <Route path='/portfolio/uideg' component={Uideg} />
      <Route path='/portfolio/design' component={Design} />
      <Route path='/contact' component={Contact} />
    </Switch>
    </>
  );
};



export default App;
