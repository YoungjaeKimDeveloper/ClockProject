
import { useState, useRef } from "react";
export default function Player() {
  // It is javascript object
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("User");
  const playerName = useRef();
  // Submti function
  const handleClick = () => {
    setName(playerName.current.value);
    setIsSubmitted((prev) => !prev);

  };

  return (
    <section id="player">
      {/* If first value is true than excute first first */}
      <h2>Welcome {name ?? "user"}</h2>
      <p>
        <input ref={playerName} type="text" onChange={(e) => handleName(e)} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
