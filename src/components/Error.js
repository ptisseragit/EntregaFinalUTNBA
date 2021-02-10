import React from "react";

const Error = ({message}) => {
  return <div className="alert alert-danger mt-2"> {message} </div>;
};

export default Error;
