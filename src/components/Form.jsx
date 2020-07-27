import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = props => {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="Password" placeholder="Password" />
      {!props.status && (
        <Input type="Password" placeholder="Confirm Password" />
      )}
      <Button type="submit" text={props.status} />
    </form>
  );
};

export default Form;
