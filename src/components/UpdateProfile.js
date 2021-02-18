import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function UpdateProfile() {
  const emailRef = useRef();
  const pwdRef = useRef();
  const cpwdRef = useRef();
  const history = useHistory();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser, updateEmail, updatePassword } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    if (pwdRef.current.value !== cpwdRef.current.value) {
      return setError("Password does not match");
    }
    const promises = [];
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (pwdRef.current.value) {
      promises.push(updatePassword(pwdRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        history.push("/dashboard");
      })
      .catch(() => {
        setError("Failed to update Account");
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="d-flex justify-content-between">
            <h4>Update</h4>
            <Link to="/login" className="mr-5">
              Log In
            </Link>
          </div>
          <hr />
          <form onSubmit={handleSubmit}>
            {/* <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                id="name"
              />
            </div> */}
            <div className="form-group">
              <label>Email address:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                id="email"
                ref={emailRef}
                defaultValue={currentUser.email}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Leave if you want to keep old password"
                id="pwd"
                ref={pwdRef}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Leave if you want to keep old password"
                id="cpwd"
                ref={cpwdRef}
              />
            </div>
            {error !== "" ? (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            ) : null}
            <button
              type="submit"
              className="btn btn-primary mr-5"
              disabled={isLoading}
            >
              Update
            </button>
            <Link to="/dashboard" className="">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
