import React, { useEffect, useState } from "react";
import axios from "axios";

import { useLocation } from "react-router";
import { Link } from "react-router-dom";
export default function Jobdetail() {
    const { state } = useLocation();
    const [details, setDetails] = useState(null);
    const [error, setError] = useState(null);
  

    const getDetails = async () => {
        try {
            const response = await axios({
              method: "get",
              url: "https://dev6.dansmultipro.com/api/recruitment/positions/" + state.id,
              withCredentials: false,
            });
            setDetails(response.data)
          } catch (error) {
            console.log("error!", error);
            setError(error); // Handle any errors that occur during the request
          }
      };

      useEffect(() => {
        getDetails();
      }, []);
    
    return (
        <div>
            <Link to="/" className="btn btn-primary">
            back
            </Link>
            {   
                details? 
                <div style={{border: '1px solid', boxShadow: "5px 10px #888888", padding: '20px'}}>
                    <h3>{details.type}/{details.location}</h3>
                    <h2>{details.title}</h2>
                    <hr/>
                    <div style={{display: "flex"}}>                
                        <div dangerouslySetInnerHTML={{ __html: details.description }} />
                        <div>
                            <div  style={{border: '1px solid', margin: '20px', padding: '20px'}} >
                                <p>{details.company}</p>
                                <a href={details.company_logo} target="_blank">
                                <img width="250" height="250" border="0" align="center"  src=""/>
                                </a>
                            </div>
                            <div  style={{border: '1px solid', margin: '20px', padding: '20px'}} dangerouslySetInnerHTML={{ __html: details.how_to_apply }} />
                        </div>

                    </div>

                </div>
                :<div>loading</div>
            }
        </div>
        
    );
}
