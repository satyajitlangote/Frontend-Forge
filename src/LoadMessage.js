import React, { useEffect } from "react";

function LoadMessage() {

  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return (
    <div>
      <h1>Satyajit Langote</h1>
    </div>
  );
}

export default LoadMessage;