import React from 'react';
import './App.css';

import Header from "./Header";
import Multiplier from "./Multiplier"

const App = () => (
  <React.Fragment>
  <Header />
  <Multiplier x={ 5 } y= { 7 } />
  </React.Fragment>
);
export default App;


