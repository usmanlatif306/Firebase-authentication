import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Register() {
  const emailRef = useRef();
  const pwdRef = useRef();
  const cpwdRef = useRef();
  const history = useHistory();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    if (pwdRef.current.value !== cpwdRef.current.value) {
      return setError("Password does not match");
    }
    try {
      setError("");
      setIsLoading(true);
      await signup(emailRef.current.value, pwdRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to Sign Up");
    }
    setIsLoading(false);
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="d-flex justify-content-between">
            <h4>Register</h4>
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </div>
          <hr />
          <form onSubmit={handleSubmit}>
            {/* <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
              />
            </div> */}
            <div className="form-group">
              <label>Email address:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                ref={emailRef}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                ref={pwdRef}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password again"
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
              className="btn btn-primary"
              disabled={isLoading}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
