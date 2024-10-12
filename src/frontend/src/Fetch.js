import React, { useState } from "react";

export const Fetch = () => {
  const [greeting, setGreeting] = useState("Load Greeting");
  const handleGreeting = () => {
    setGreeting("hello there");
  };
  return (
    <>
      <h1 onClick={() => handleGreeting()}>{greeting}</h1>
      <button disabled>saludar</button>
    </>
  );
};

export default Fetch;
