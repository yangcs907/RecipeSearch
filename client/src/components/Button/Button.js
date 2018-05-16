import React from "react";
import "./Button.css";
const Button = ({ type = "default", className, children, onClick }) => (
  <button
    onClick={onClick}
    className= "button"
  >
    {children}
  </button>
);

export default Button;
