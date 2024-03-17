import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("button clicked");
        axios.post("http://localhost:1080/createUser",
        {name, email, age}). //payload data is sending from frontend to backend using axios we send data from f-b
        then(response=>{
          console.log(response)
          navigate('/')
        }
        )
        .catch(err=>console.log("error"))
    }

  return (
    <div className="d-flex vh-100 bg-success justify-content-center align-item-center">
    <div className="w-50 h-50 bg-white rounded p-3 m-5">
    <form onSubmit={handleSubmit}>
        <h2>Add User</h2>
        <div className='mb-2'>
          <label htmlFor="name">Name:</label>
          <input
            className='form-control'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className='form-control'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            className='form-control'
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button className='m-2 rounded btn btn-success' type="submit">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default CreateUser