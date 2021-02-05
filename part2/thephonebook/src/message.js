import React from "react";

const Message = ({ info, success }) => {
  return <div className={success ? "success" : "danger"}>{info}</div>;
};

export default Message;
