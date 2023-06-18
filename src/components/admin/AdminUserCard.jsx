import React from "react";
import "./admin.css";

function AdminUserCard({ data }) {
  return (
    // <div className={"user_card"}>
    //   <img src={data?.avatar} alt="" />
    //   <p>{data?.name}</p>
    //   <p>{data?.email}</p>
    //   <p>{data?.location}</p>
    //   <p>{data.memberSince && new Date(data.memberSince).toDateString()}</p>
    // </div>
    <tr>
      <td>
        <img src={data?.avatar} alt="" />
      </td>
      <td>
        <p>{data?.username}</p>
      </td>
      <td>
        <p>{data?.email}</p>
      </td>
      <td>
        <p>{data?.location}</p>
      </td>
      <td>
        <p>{data.memberSince && new Date(data.memberSince).toDateString()}</p>
      </td>
      <td>
        <p>{data.role}</p>
      </td>
    </tr>
  );
}

export default AdminUserCard;
