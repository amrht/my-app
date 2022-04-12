
import './App.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar.js'
import Footer from './components/footer.js'
import { CDBFooter } from 'cdbreact';
import Page from './pages/p1.js';
import Page4 from './pages/p4.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
     
    <div className="App">
      <Navigation sticky='top' />
      <Switch>
      	<Route path='/' component={Page4}/>
      	<Route path='/thisjob' component={Page}/>
      </Switch>
    
      


    </div>
     
  );
}

export default App;
