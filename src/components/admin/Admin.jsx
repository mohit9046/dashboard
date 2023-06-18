import React, { useState, useEffect } from "react";
import "./admin.css";
import { createRandomUsers } from "../../utils/getFakeData";
import { useNavigate } from "react-router-dom";
import AdminUserCard from "./AdminUserCard";

function Admin() {
  const router = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const login_type = localStorage.getItem("login_type");
    if (login_type !== "admin") return router("/");
    const usersData = createRandomUsers();
    setUsers(usersData);
  }, []);

  return (
    <div className={"admin"}>
      <h1>Admin Dashboard</h1>
      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Location</th>
          <th>Member Since</th>
          <th>Role</th>
        </tr>
        {users.map((user, index) => (
          <AdminUserCard key={index} data={user} />
        ))}
      </table>
      {/* <Stack direction={"column"} gap={2} flexWrap={"row"}>
        {users.map((user, index) => (
          <AdminUserCard key={index} data={user} />
        ))}
      </Stack> */}
    </div>
  );
}

export default Admin;
