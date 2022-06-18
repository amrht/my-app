
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar.js';
import Cardpage from './pages/p2.js';
import Page from './pages/p4.js';
import Page3 from './pages/p3.js';
import P404 from './pages/p404.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation sticky="top" />
      <Switch>
        <Route path="/" component={Page} />
        <Route path="/*" component={P404} />
      </Switch>
    </div>
  );
}

export default App;
