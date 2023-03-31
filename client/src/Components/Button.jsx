import React from "react";

const style = {
  padding: "10px 20px",
  background: "#06c186",
  textAlign: "center",
  marginTop: "64px",
  cursor: "pointer",
  display: "block",
  width: "100%",
  outline: "none",
  border: "gainsboro 1px solid",
  marginBottom: "8px",
};

const Button = (props) => {
  return (
    <button type={props.type} style={style}>
      {props.children}
    </button>
  );
};

export default Button;
