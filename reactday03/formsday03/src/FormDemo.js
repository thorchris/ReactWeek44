import React, {useState} from "react";

const NameForm = () => {

const initialState = {name: "", age: "", email: ""};

const [person ,setPerson] = useState(initialState);

function handleSubmit(evt) {
    evt.preventDefault()
    window.alert(JSON.stringify(person))
    setPerson(initialState);
}

  function handleInput(event) {
      const target = event.target
      const id = target.id
      const value = target.value
      setPerson({...person, [id]: value})
  }
  
 
  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleInput}>
          <input id="name" type="text" placeholder="name" value={person.name} />
          <br/>
          <input id="age" type="text" placeholder="age" value={person.age} />
          <br/>
          <input id="email" type="text" placeholder="email" value={person.email} />
          <br/>
        <button>Submit</button>
      </form>
      <p>{JSON.stringify(person)}</p>
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}
