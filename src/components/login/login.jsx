import React, { useState } from "react";
import "./login.css";
import { db } from "../../data/data";
import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const router = useNavigate();
  const [userData, setUserData] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const usersWithUsername = db.filter(
      (user, index) => user.username === userData.username
    );
    if (
      usersWithUsername.length >= 1 &&
      usersWithUsername[0].password === userData.password
    ) {
      if (usersWithUsername[0].role == "admin") {
        localStorage.setItem("login_type", "admin");
        return router("/admin-dashboard");
      } else {
        localStorage.setItem("login_type", "user");
        return router("/user-dashboard");
      }
    }
    setUserData({
      username: "",
      password: "",
    });
    alert("Invalid credentials!");
  };

  return (
    <div className={"login"}>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <Stack direction={"column"} spacing={2}>
          <TextField
            size={"small"}
            autoFocus
            value={userData.username}
            label={"Username"}
            onChange={(e) => {
              setUserData((prev) => ({ ...prev, username: e.target.value }));
            }}
          />
          <TextField
            size={"small"}
            value={userData.password}
            label={"Password"}
            onChange={(e) => {
              setUserData((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </div>
  );
}

export default Login;
