import person, {males, females} from './file2.js';
import upper, {text1,text2, text3} from "./file1";
import {Welcome, MultiWelcome} from "./file3";
import React from 'react';
import './App.css';

const {email, firstName, gender, lastName} = person;

function App() {
  return (
    <div className="App">
      <p>Velkommen</p>
      <h2>Ex 1</h2>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{upper("please uppercase me")}</p>
      <h2>Ex 2</h2>
      <p>{firstName}</p>
      <p>{email}</p>
      <h2>Ex 3</h2><MultiWelcome/>
    </div>
  );
}

const joined = [...males, ...females]
const joined2 = [...males, "Kurt", "Helle", ...females, "Tina"];
console.log(joined)
console.log(joined2)



export default App;
