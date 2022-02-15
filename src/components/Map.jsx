import React,{useEffect, useState} from "react";
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


function Map(props){


    React.useEffect( async ()=>{
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhaGFuLW9uZSIsImEiOiJja3puNmQ3M2QwNWM1Mm9xdWJ6N2czdnoyIn0.ED-jNupoik_UX71rFEDbjw';
        const map = await new mapboxgl.Map({
            container: "map", // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [props.long, props.lat], // starting position ///lnglat
            zoom: 9 // starting zoom
        });
       
        const marker1 = new mapboxgl.Marker()
.setLngLat([props.long, props.lat])
.addTo(map);

        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl());

        
    },[])
   
    
    
 return   <div id="map"></div>
}

export default Map;