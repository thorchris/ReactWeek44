import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';

function NewPerson(props){

    const[person, setPerson] = useState(props.nextPerson);

    const savePerson = (evt) => {
        if(person.personText === ""){
            return;
        }
        props.addPerson(person);
        evt.preventDefault(); 
    }

    useEffect(() => setPerson({ ...props.nextPerson }), [props.nextPerson]);

    const onChange = (evt) => {
        const val = evt.target.value;
        person.personText = val;
        setPerson({ ...person });
    }

    const title = person.id === "" ? "Create new Person" : "Edit Person"
    return (
        <div>
            <h4>{title}</h4>
            <form>
                <input value={person.personText} onChange={onChange} />
                <br/><br/>
                <button onClick={savePerson}>Save</button>
            </form>
            {person.id !== "" && <p>Editing person with</p>}
        </div>
    );
}

export default NewPerson;

NewPerson.propTypes = {
    nextPerson: PropTypes.object,
    addPerson: PropTypes.func
  }