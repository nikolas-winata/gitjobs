import React, { useEffect, useState } from "react";
import axios from "axios";
import Jobpreview from "./jobpreview"

export default function Query() {
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    const getData = async () => {
        try {
            const response = await axios({
              method: "get",
              url: "https://dev6.dansmultipro.com/api/recruitment/positions.json",
              withCredentials: false,
            });
            setData(response.data)
          } catch (error) {
            console.log("error!", error);
            setError(error); // Handle any errors that occur during the request
          }
      };

      useEffect(() => {
        getData();
      }, []);
    

    
    const handleSearch = async (e) => {
        console.log("search unimplemented!")
    };
  
    return (
      <div>
        <form onSubmit={handleSearch}>
          <label>
            <h3>
              JobDescription
            </h3>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <h3>
                Location
            </h3>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <input type="submit" value="search" />
        </form>
        {/* <p>{ data != null ? Object.values(data): "error"}</p> */}
        {data != null ? <p>{Object.values(data).map(d=> 
        <div style={{paddingTop: 10}}><Jobpreview data={d}/></div>
        )}</p>: <p>none</p>}
      </div>
    );
  }
  