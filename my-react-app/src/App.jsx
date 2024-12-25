import React, { useEffect, useState } from "react";
import { UserProfileCard } from "./UserProfileCard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {user ? <UserProfileCard user={user} /> : <p>Loading...</p>}
    </div>
  );
}



export default App;
