import React from "react";
import Link from "next/link";

async function getUsers(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function Userpage({ params }) {
  const user = await getUsers(params.id);

  return (
    <div className="flex items-center">
      <div className="max-w-md mx-auto bg-slate-400 rounded-lg shadow-md overflow-hidden">
        <img
          className="rounded-lg w-full"
          src={user.avatar}
          alt={user.first_name}
        />
        <div className="font-semibold p-4">
          <p>Nombre: {user.first_name}</p>
          <p>Apellido: {user.last_name}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Userpage;
