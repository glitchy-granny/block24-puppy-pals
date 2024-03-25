import { useState } from "react";
import { puppyList } from "./data";
import "./index.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPup] = useState(null);

  function handleClick(id) {
    setFeatPup(id);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  console.log(featuredPup);

  return (
    <div className="container">
      <div className="puppies-list">
        {puppies.map((puppy) => (
          <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
            {puppy.name}
          </p>
        ))}
      </div>

      {featPupId && (
        <div className="featured-pup">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
          <div className="tricks-list">
            <h3>Tricks:</h3>
            {featuredPup.tricks.map((trick) => (
              <div key={trick.id} className="trick-item">
                {trick.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
