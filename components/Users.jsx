"use client"
import Link from "next/link"

function Users({users}) {
  return (
    <Link
                    // href={"/users/${user.id}"}
    >
      {users.map((user) => (
        <div className="flex bg-slate-400 mb-2 p-4 rounded-md " key={user.id}>
          <img className="rounded-lg" src={user.avatar} alt={user.first_name} />
          <div className="p-4 font-semibold">
            <h1 className="font-bold">ID : {user.id}</h1>
            <p>Nombre :{user.first_name}</p>
            <p>Apellido :{user.last_name}</p>
            <p>Email : {user.email}</p>
          </div>
        </div>
      ))}
    </Link>
  );
}

export default Users;
