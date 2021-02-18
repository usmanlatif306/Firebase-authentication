import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-100 bg-success text-center py-2 font-weight-bold">
      <Link to="/admin/dashboard" className="text-white mx-3">
        Home
      </Link>
      <Link to="/admin/blog" className="text-white mx-3">
        Blog
      </Link>
      <Link to="/admin/notifications" className="text-white mx-3">
        Notifications
      </Link>
    </div>
  );
}
