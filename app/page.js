


async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}



async function HomePage() {

  const users = await fetchUsers()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {users.map(user => (
        <div key={user.id}>
          <p>{user.first_name}</p>
        </div>
        
      ))}
    </main>
  );
} 

export default HomePage
 