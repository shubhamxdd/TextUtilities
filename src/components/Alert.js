import React from "react";

function Alert(props) {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div style={{height: "50px"}}>
    {props.alert && 
      <div className="container">
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show mt-1`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      </div>}
    </div> 
  )
}

export default Alert;
