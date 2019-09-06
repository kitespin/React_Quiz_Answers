import React from 'react';
import './App.css';

import Header from "./Header";
import Multiplier from "./Multiplier";
import EvenClicks from "./EvenClicks";

const App = () => (
  <React.Fragment>
  <Header />
  <Multiplier x={ 5 } y= { 7 } />
  <EvenClicks initial={ 50 }/>
  </React.Fragment>
);
export default App;


