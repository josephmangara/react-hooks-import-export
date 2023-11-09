import React from "react";
import HowManyParks from "./parks/HowManyParks";
import {trees, Wildlife} from "./parks/RockyMountain";
import MesaVerde from "./parks/MesaVerde"
function ColoradoStateParks(props) {
  return (
    <div> 
      <h1>Colorado State Parks!</h1>
      <HowManyParks />
      <MesaVerde />
      <div>
        <p>Trees: {trees}</p>
        <p>Wild Animals present: <Wildlife /></p>
        
      </div>
      
   </div>
  )
}

 export default ColoradoStateParks;