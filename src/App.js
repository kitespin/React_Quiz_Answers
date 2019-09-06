import React from 'react';
import './App.css';

import Header from "./Header";
import Multiplier from "./Multiplier";
import EvenClicks from "./EvenClicks";
import CountBy from "./CountBy";
import HideMe from "./HideMe";

const App = () => (
  <React.Fragment>
  <Header />
  <Multiplier x={ 5 } y= { 7 } />
  <EvenClicks />
  <CountBy step={5}/>
  <HideMe>I love cheese triangles</HideMe>
  </React.Fragment>
);
export default App;


