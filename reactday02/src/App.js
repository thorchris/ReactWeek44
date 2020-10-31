import './App.css';
import Count from "./Count"
import Fetch from "./Fetch"
import React from 'react';
import Members from './ListDemo';

const App = () => {
  return (
    <div className="App">
      <p>React Day 2</p>
      {/* <Count init={parseInt(localStorage.getItem("count"))} increment={5}/> */}
      <Count init={50} increment={5}/>
      <Fetch/>
      <Members/>
    </div>
  );
}

export default App;
