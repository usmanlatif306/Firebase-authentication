import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const pwdRef = useRef();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setIsLoading(true);
      await login(emailRef.current.value, pwdRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to Login");
    }
    setIsLoading(false);
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="d-flex justify-content-between">
            <h4>Login</h4>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
          </div>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email address:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                id="email"
                ref={emailRef}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                id="pwd"
                ref={pwdRef}
              />
            </div>
            {error !== "" && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              Login
            </button>
            <Link to="/reset-password" className="ml-5">
              Forget Password
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
