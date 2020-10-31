import React from 'react';
import {persons} from "./file2"
import PropTypes from "prop-types";

 export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  export function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        {persons.map((p) => (
        <WelcomePerson name={p.firstName} lastName={p.lastName} email={p.email}/>
      ))}
    </div>
  );
}

WelcomePerson.propTypes = {
    name : PropTypes.string.isRequired,
    lastName : PropTypes.string,
    email : PropTypes.string
}

export function WelcomePerson(props) {
  return <h4>First Name: {props.name} Last Name: {props.lastName} Email: {props.email}</h4>;
}
  