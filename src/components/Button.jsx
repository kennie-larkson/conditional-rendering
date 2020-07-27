import React from "react";

const Button = props => (
  <button type={props.type}>{props.status ? "Login" : "Register"}</button>
);

export default Button;
