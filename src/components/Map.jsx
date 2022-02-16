import React,{useEffect, useState} from "react";
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');





function Map(props){
const [long,setLong]= useState(78);
const [lat,setLat]= useState(23);
const [zoom,setZoom] = useState(2)

const [isClicked,setClick] = useState(false);

function showOnMap(){
setLong(props.long);
setLat(props.lat);
setZoom(9);
setClick(true);
}
    React.useEffect(async()=>{

        mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhaGFuLW9uZSIsImEiOiJja3puNmZoNDMydjViMnBucmM5N2w5Zjh2In0.yJFj5TqWxqAeVkWBbjG2gw';
        const map = await new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [long, lat], // starting position
        zoom: zoom // starting zoom
        });
        
        map.addControl(new mapboxgl.NavigationControl());
        
        const marker1 = new mapboxgl.Marker()
.setLngLat([long, lat])
.addTo(map);
    })


return <div>
 <center><button className="btn btn-warning" onClick={showOnMap}>Show on map</button></center> 
 {!isClicked?<div className="map"> <center><h1 className="map-text">Track Ip Address of Anyone , Anywhere in the world </h1></center>  </div> :<div id="map"></div>}
</div> 
}

export default Map;

