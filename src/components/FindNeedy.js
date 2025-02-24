import React, { useState } from "react";
import "../styles/FindNeedy.css";

const FindNeedy = () => {
  const [needyList] = useState([
    { name: "John Doe", contact: "123-456-7890", location: "Downtown" },
    { name: "Jane Smith", contact: "987-654-3210", location: "Main Street" },
  ]);

  return (
    <div className="find-needy-container">
      <h2>Find Needy People</h2>
      <ul className="needy-list">
        {needyList.map((person, index) => (
          <li key={index}>
            <strong>{person.name}</strong> <br />
            📍 {person.location} <br />
            📞 {person.contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindNeedy;
