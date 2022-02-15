import React, { useState } from "react";



function Header(props) {

      const [ip,setIp] = useState("");

      function handleChange(event) {
         const {name,value} = event.target; 
         setIp(value)
         event.preventDefault();
      }

      
      
    



    return <div className="top-portion">
      <center><h1 className="top-heading">IP Adress Tracker</h1></center>  
       <center>
       <form onSubmit={(event)=>{
               props.action(ip);
               event.preventDefault();
            }}>
       <div className="input-group mb-3">
           <input name="ipSearched" type="text" className="form-control" onChange={handleChange} value={ip} placeholder="Search for an Ip Address..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
           <button className="btn btn-outline-secondary go-btn" type="submit" id="button-addon2"><img src="./images/icon-arrow.svg"/></button>
           
           </div>
           </form>
           </center> 
       
    </div>
}

export default Header;