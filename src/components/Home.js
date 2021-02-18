import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Home() {
  const [error, setError] = useState("");
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  async function handleLogOut() {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch {
      setError("Unable to log out");
    }
  }
  return (
    <div className="mt-5">
      <div className="w-25 mx-auto border p-3">
        <h1 className="text-center">Profile</h1>
        {/* <h6 className="pt-3">
          Name: <span>Usman Latif</span>
        </h6> */}
        <h6 className="pb-3">Email: {currentUser.email}</h6>
        {error !== "" ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : null}
        <Link to="update-profile" className="btn btn-primary mr-4">
          Update Profile
        </Link>
        <button className="btn btn-danger" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    </div>
  );
}
