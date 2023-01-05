import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Map from "./Map.jsx";


function App() {
  const [data, setData] = React.useState([]);
const [ip,setIp] = useState("");
const [clickState,setClick]= useState(false);


function action(ip) {
  
  setIp(ip)
  setClick(true); 
  fetch("https://api.freegeoip.app/json/"+ip+ "?apikey=6f754640-8d68-11ec-90bb-375f23ee0386",{
  mode:'no-cors',
  })
  .then(response => response.json())
  .then(data=> setData(data))
  .catch(err => console.log(err))
}



  return (
    <div className="main-div container-fluid">
       <Header action={action}/>
       <center>
       <div className="ip-info row container-fluid">
       <br/>
    
       <div className="col-lg-3">
       <h4>  IP Address</h4>
         {clickState ? data.ip :"..."}
       </div>
       <div className="col-lg-3">
       <h4>  Location</h4>
         {clickState ?data.city:"..."} , {clickState ?data.region_code:"..."}
       </div>
       <div className="col-lg-3">
       <h4>  Time Zone</h4>
         {clickState ?data.time_zone:"..."}
       </div>
       <div className="col-lg-3">
        <h4> Country</h4>
         {clickState ?data.country_name:"..."}
       </div>
  
       </div>
       <br/>
       <hr style={
       {"height":"2px"}
       }/>
       </center>
        <Map long={data.longitude} lat={data.latitude}/>
       <Footer/>


    </div>
  );
}

export default App;

