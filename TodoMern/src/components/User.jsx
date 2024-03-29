import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function User() {
  let [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:1080/delete/" + id)
      .then((res) => {
        fetchData();
      })
      .catch((err) => console.log(err));
  };

  function fetchData() {
    axios.get("http://localhost:1080/").then((res) => setUsers(res.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="d-flex vh-100 bg-danger justify-content-center align-item-center">
      <div className="w-80 bg-white rounded p-3 m-5">
        <Link to="/create" className="btn btn-danger">
          Add
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users) => {
              return (
                <tr key={users._id}>
                  <td>{users.id}</td>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>
                    <Link
                      to={`/update/${users._id}`}
                      className="btn btn-success"
                    >
                      Update
                    </Link>{" "}
                    <button
                      className="rounded btn btn-danger"
                      onClick={(e) => handleDelete(users._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
