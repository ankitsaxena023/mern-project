import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:1080/updateUser/" + id, { name, email }) //payload data is sending from frontend to backend using axios we send data from f-b
      .then((response) => {
        navigate("/");
        // console.log(response)
      })
      .catch((err) => console.log("error"));
  };

  useEffect(() => {
    axios
      .get("http://localhost:1080/getusers/" + id)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name), setEmail(res.data.email);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="w-50 h-50 bg-white rounded p-3 m-5">
        <form onSubmit={handleSubmit}>
          <h2>Update User</h2>
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
          {/* <div>
            <label htmlFor="age">Age:</label>
            <input
              className="form-control"
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div> */}
          <button className="m-2 rounded btn btn-success" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
