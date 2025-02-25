import React from "react";
import Button from "../components/Button.js"
import BackToHomeButton from "../components/BackToHomeBtn.js";


function Posts() {
  const handleClick = () => {
    alert("Welcome to Sosialhub!");
  };

  return (
    <div>
      <h2>Welcome to Home</h2>
      <p>Here are your posts.</p>

      <Button label="Get Started" type="button" onClick={handleClick} />

      <BackToHomeButton />

      
    </div>
  );
}

export default Posts;

