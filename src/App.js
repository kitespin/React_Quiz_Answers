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


const App = () => (
  
  <Router>
    <React.Fragment>
    
      <Header />
      {/* <Multiplier x={ 5 } y= { 7 } /> */}
      {/* <EvenClicks /> */}
      {/*<CountBy step={5}/> */}
      {/*<HideMe>I love cheese triangles</HideMe> */}
      {/* <MinimumLength /> */}
    
      <Switch>

      <Route exact path="/evenclicks" component={ EvenClicks }/>
      <Route exact path="/minimumlength" component={ MinimumLength }/>
      <Route path="/multiplier/:x/:y" render={ ({ match }) => (
        <Multiplier x={ +match.params.x } y={ +match.params.y } />
         ) } />    
      <Route path="/countby/:step" render={ ({ match }) => (
        <CountBy step={ +match.params.step } />
       ) } />
      <Route path="/hideme" render={ () => (
        <HideMe>I love cheese triangles</HideMe>
         ) } />

     </Switch>
    </React.Fragment>
  </Router>

);

export default App;
