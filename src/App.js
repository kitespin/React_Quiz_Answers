import React from 'react';
import './App.css';
// import the ReactRouter components
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";


import Header from "./Header";
import Multiplier from "./Multiplier";
import EvenClicks from "./EvenClicks";
import CountBy from "./CountBy";
import HideMe from "./HideMe";
import MinimumLength from "./MinimumLength";
import FourOhFour from "./FourOhFour";
import Home from "./Home";


const App = () => (
  
  <Router>
    <React.Fragment>
    <Header/>  
      <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/evenclicks" component={ EvenClicks }/>
      <Route path="/minimumlength/:length" render={ ({ match }) => (
        <MinimumLength length={ +match.params.length } />
         ) } />
      <Route path="/multiplier/:x/:y" render={ ({ match }) => (
        <Multiplier x={ +match.params.x } y={ +match.params.y } />
         ) } />    
      <Route path="/countby/:step" render={ ({ match }) => (
        <CountBy step={ +match.params.step } />
       ) } />
      <Route path="/hideme" render={ () => (
        <HideMe>I love cheese triangles</HideMe>
         ) } />
      <Route component={ FourOhFour }/>
     </Switch>
    </React.Fragment>
  </Router>
);

export default App;
