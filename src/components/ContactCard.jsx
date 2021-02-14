import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div>
      <div style={{ fontSize: "1.2em" }}>{name}</div>
      <div style={{ fontSize: "0.8em" }}>{email}</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          props.clickHandler();
        }}
      >
        <DeleteForeverIcon />
      </div>
    </div>
  );
};

export default ContactCard;
