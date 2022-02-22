import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form';

// setting up initial form values to use later
const initialValues = {
  name: "",
  email: "",
  role: ""
}
function App() {
// tracking two different slices of state: list of team members and values submitted by form component
  const [team, setTeam] = useState([]);
  const [values, setValues] = useState(initialValues);
// function for updating form values 
  const update = (name, value) => {
    setValues({ ...values, [name]: value });
  };
// function for submitting form values to update member list
  const submit = () => {
    const member = {
      name: values.name.trim(),
      email: values.email.trim(),
      role: values.role
    };
    setTeam([member, ...team]);
    setValues(initialValues);
  }
  console.log(team);
  return (
    <div className="App">
      <Form 
      update={ update }
      submit={ submit }
      values={ values }
      />
      {team.forEach(member => {
        console.log(member);
        return (
          <div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.email}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
