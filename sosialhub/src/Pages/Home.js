import React from "react";
import Button from "../components/Button";

function Home() {
  const handleClick = () => {
    alert("Welcome to Sosialhub!");
  };

  return (
    <div>
      <h2>Welcome to Home</h2>
      <p>Explore Sosialhub, connect with others, and share your thoughts!</p>
      <Button label="Get Started" type="button" onClick={handleClick} />
    </div>
  );
}

export default Home;