import React from "react";
import Form from "./Form";

var userIsRegistered = false;

const App = () => (
  <div className="container">
    <Form status={userIsRegistered} />
  </div>
);

export default App;
