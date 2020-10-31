import React, {useState} from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import FormDemo from "./FormDemo"
import ReservationForm from "./FormDemoMultiple"
import PersonList from "./PersonList"
import NewPerson from "./NewPerson"
import { v1 as uuid } from 'uuid';

function App() {
  const initialData = [
    {id: uuid(), personText: "Peter"},
    {id: uuid(), personText: "Ole"},
    {id: uuid(), personText: "Jan"}
  ]
  
  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({id: "", personText: ""})
  console.log(persons)

  const addPerson = (person) =>{
    if(person.id === ""){
      person.id = uuid();
      persons.push(person);
    } else {
      let personToEdit = persons.find(p => p.id === person.id);
      personToEdit.personText = person.personText;
    }
    setPersons([...persons]);
    setNewPerson({id: "", personText: ""});
  };

  return (
    <div className="App">
      <h3>Forms and more</h3>
      <FormDemo/>
      <ReservationForm/>
      <h3 className="mt-5 mb-3">Lifting State</h3>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-4 allPersons">
          <PersonList persons={persons} />
        </div>
        <div className="col-4 new-person">
          <NewPerson
            addPerson={addPerson}
            nextPerson={newPerson}
          />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default App;
