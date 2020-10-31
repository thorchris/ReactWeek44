import React from "react";
import PropTypes from "prop-types";

const PersonList = ({ persons }) =>{
    return (
        <div>
            <h3>All Persons</h3>
            <ul>
                {persons.map((person) => (
                <li key={person.id}>{person.personText}</li>
                ))}
            </ul>
        </div>
    );
};

export default PersonList;

PersonList.propTypes = {
    persons: PropTypes.array
}

