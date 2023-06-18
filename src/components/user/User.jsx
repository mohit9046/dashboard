import React, { useEffect } from "react";
import "./user.css";
import { useNavigate } from "react-router-dom";

function User() {
  const router = useNavigate();
  useEffect(() => {
    const login_type = localStorage.getItem("login_type");
    if (login_type !== "user") return router("/");
  }, []);

  return (
    <div className={"user"}>
      <h1>User</h1>
      <br />
      <p>This is the user-dashboard page</p>
    </div>
  );
}

export default User;
