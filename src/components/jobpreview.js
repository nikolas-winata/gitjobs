import React from "react";

export default function Jobpreview(props) {
  return (
    <button style={{border: '1px solid', borderRadius: '20px', width: "100%"}}>
        <p>{props.data.title}</p>
        <p>{props.data.company}</p>
        <p>{props.data.type}</p>
        <p>{props.data.location}</p>
        <p>{props.data.created_at}</p>
    </button>
  );
}
