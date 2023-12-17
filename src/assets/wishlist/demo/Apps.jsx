import { useState } from "react";
import { Users } from "./Usersg";
function Apps() {
  const [query, setQuery] = useState("");
  return (
    <div className="app" style={{ marginTop: "150px" }}>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      {Users.filter((user) =>
        user.first_name.toLowerCase().includes(query)
      ).map((user) => (
        <li key={user.id}>{user.first_name}</li>
      ))}
    </div>
  );
}

export default Apps;
