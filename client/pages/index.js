import React, { useEffect, useState } from 'react';
import axios from "axios";

function index() {
  const [newClient, setClient] = useState(false);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    axios.post('http://localhost:4000/api/newUser', {
      email: email,
      number: phoneNumber,
      firstName: fName,
      lastName: lName,
      password: password
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err);
    })
  }

  const login = () => {
    axios.post('http://localhost:4000/api/login').then((res) => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      <div className='flex flex-col'> 
        <label htmlFor='firstName'>First Name</label>
        <input type='text' name='firstName' value={fName} onChange={(e) => {setFName(e.target.value)}}/>
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' name='lastName' value={lName} onChange={(e) => {setLName(e.target.value)}}/>
        <label htmlFor='name'>Email: </label>
        <input type='email' name='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <label htmlFor='mobileNumber'>Phone Number (SMS Available)</label>
        <input type='text' name='mobileNumber' value={phoneNumber} onChange={(e) => {setNumber(e.target.value)}}/>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        <button onClick={() => signUp()}>Create Account</button>
      </div>
      <hr/>
      <div className='flex flex-col'>
        <label htmlFor='emailLog'>Email</label>
        <input type='text' name='emailLog' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <label htmlFor='passwordLog'>Password</label>
        <input type='password' name='passwordLog' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        <button onClick={() => login()}> Login </button>
      </div>
    </div>
  )
}

export default index