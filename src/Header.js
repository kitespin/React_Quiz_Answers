import React from "react";
// we use className to add classes for Bootstrap styling
// import Link from ReactRouter
import { Link } from "react-router-dom";
const Header = () => (
  <header className="page-header">
  	<h1>Quiz</h1>
  	<hr/>
    <h3>Answers</h3>
    <p>Click the links below</p>
    <br/>
   <ul className="list-group">
    <li>
      <Link to="/evenclicks">EvenClicks</Link>
    </li>
    <br/>
    <li>
      <Link to="/minimumlength/:length">MinimumLength (enter the length in the url)</Link>
    </li>
    <br/>
    <li>
      <Link to="/multiplier/:x/:y">Multiplier (enter the x and y value in the url)</Link>
    </li>
    <br/>
    <li>
      <Link to="/countby/:step">CountBy (enter the step value in the url)</Link>
    </li>
    <br/>
    <li>
      <Link to="/hideme">HideMe</Link>
    </li>
  </ul>
  </header>
 );
export default Header;




  
