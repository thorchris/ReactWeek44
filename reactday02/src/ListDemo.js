import React from "react";
 
const MemberTable = (props) => {
    return (
        <table>
            <thead>
                <tr><th>Name</th><th>Age</th></tr>
            </thead>
            <tbody>
                {props.members.map(m =><tr key={m.name}><td>{m.name}</td><td>{m.age}</td></tr>)}
            </tbody>
        </table>
    );
}
 
const MemberDemo = (props) =>{
    return (
        <div>
            <h3>All members</h3>
            <MemberTable members={props.members}/>
        </div>
    )
}
 
const Members = () => {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Hanne", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Holger", age: 22}];
 
  return (
  <MemberDemo members={initialMembers} />);
}

export default Members