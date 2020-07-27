import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = props => {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="Password" placeholder="Password" />
      {props.status ? (
        <Button type="submit" text="Login" />
      ) : (
        <div>
          <Input type="Password" placeholder="Confirm Password" />
          <Button type="submit" text="Register" />
        </div>
      )}
    </form>
  );
};

export default Form;
