import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createRandomUsers } from "./utils/getFakeData";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import AdminDashboard from "./components/admin/Admin";
import UserDashboard from "./components/user/User";

function App() {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <>
              <Login />
            </>
          }
        ></Route>
        <Route
          path="admin-dashboard"
          element={
            <>
              <AdminDashboard />
            </>
          }
        ></Route>
        <Route
          path="user-dashboard"
          element={
            <>
              <UserDashboard />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
