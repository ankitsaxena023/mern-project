import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(null);
  // const [age, setAge] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:1080/createUser", { name, email, id }) //payload data is sending from frontend to backend using axios we send data from f-b
      .then((response) => {
        console.log("check", response);
        if (response.status === 200) {
          alert("user successfully created");
        }
        setId(null);
        setName("");
        setEmail("");
      })
      .catch((err) => alert("duplicate id, provide unique one"));
    navigate("/");
  };

  return (
    <div className="d-flex vh-100 bg-success justify-content-center align-item-center">
      <div className="w-50 h-50 bg-white rounded p-3 m-5">
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="id">ID:</label>
            <input
              className="form-control"
              type="number"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              className="form-control"
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
              className="form-control"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button className="m-2 rounded btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
