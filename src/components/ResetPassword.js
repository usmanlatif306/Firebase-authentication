import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function ResetPassword() {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const emailRef = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      await resetPassword(emailRef.current.value);
      setMessage("Check your email to reset password");
    } catch {
      setError("Failed to Sent Reset Email");
    }
  }
  return (
    <div className="mt-5">
      <div className="w-25 mx-auto border p-3">
        <h3 className="text-center">Reset Password</h3>
        {message !== "" && (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
        )}
        <form className="mb-3" onSubmit={handleSubmit}>
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
          {error !== "" && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </form>
        <Link to="/login" className="mr-5">
          Log In
        </Link>
      </div>
    </div>
  );
}
