import React from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function StudentForm({onLogin}) {
  const [first_name, setFirstName] =useState("");
  const [last_name, setLastName] =useState("");
  const [email, setEmail] =useState(""); 
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
  
    fetch("https://virtual-backend-app.herokuapp.com/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        password_confirmation: passwordConfirmation,
        
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  

  return (
    <div>
        
        <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="first_name" 
                     placeholder="Student's First Name"
                     value ={formData.first_name} 
                     onChange={(e) => setFirstName(e.target.value)}
                    //  Id="first_name"
                     autoComplete="off"
                    />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="last_name" placeholder="Student's Last Name"
                     value ={last_name} 
                     onChange={(e) => setLastName(e.target.value)}
                    //  Id="last_name"
                     autoComplete="off"

                     />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Student's Email" 
                    //  id="email"
                     autoComplete="off"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    //  id="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     autoComplete="current-password"

                     />
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" 
                    placeholder="Confirm password"
                //    id="password_confirmation"
                   value={passwordConfirmation}
                   onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password" 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Send Invite To Mail" />
                </Form.Group>

                <Button variant="primary" type="submit">
                   {isLoading ? "Loading..." : "Add Student"} 
                </Button>
                <Form.Group>
                    {errors.map((err) => (
                   <error key={err}>{err}</error>
                     ))}
                </Form.Group>
            </Form>

    </div>
  )
}

export default StudentForm