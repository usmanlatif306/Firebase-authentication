import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function LoginMethod() {
  const [error, setError] = useState("");
  const { loginWithGmail } = useAuth();
  const history = useHistory();
  async function handleSubmit() {
    // loginWithGmail();
    try {
      setError("");
      await loginWithGmail();
      history.push("/dashboard");
    } catch {
      setError("Failed!");
    }
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 offset-4">
          <div>
            <Link to="/login" className="btn btn-primary">
              <i className="fab fa-email"></i> Sign In with Email
            </Link>
          </div>
          <div className="mt-3">
            <button className="btn btn-danger" onClick={handleSubmit}>
              <i className="fab fa-gmail"></i> Sign In with Gmail
            </button>
          </div>
          {error !== "" ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
