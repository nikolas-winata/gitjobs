import React from "react";
import { useNavigate } from "react-router-dom";


export default function Jobpreview(props) {
    const navigate = useNavigate();
    const onSubmit = () => {
        console.log("props",props)
        navigate("/details", {state: { id: props.data.id}}); 
    }
    
  return (
    <button onClick={()=>onSubmit()} style={{border: '1px solid', borderRadius: '20px', width: "100%"}}>
        <p>{props.data.title}</p>
        <p>{props.data.company}</p>
        <p>{props.data.type}</p>
        <p>{props.data.location}</p>
        <p>{props.data.created_at}</p>
    </button>
  );
}
