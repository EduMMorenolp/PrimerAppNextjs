"use client"
import Link from "next/link"


async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function Users() {

  const users = await fetchUsers()

  return (
    <div>
      {users.map((user) => (
        <Link href={`/users/${user.id}`}
        className="flex bg-slate-400 mb-2 p-4 rounded-md " key={user.id}>
          <img className="rounded-lg" src={user.avatar} alt={user.first_name} />
          <div className="p-4 font-semibold">
            <h1 className="font-bold">ID : {user.id}</h1>
            <p>Nombre :{user.first_name}</p>
            <p>Apellido :{user.last_name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Users;
