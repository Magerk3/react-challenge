import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  
  return (
    <div>
      
      {props.list.map((item) => (

          <Tile item={item} />
          
      ))}
      
      
    </div>
  );
};
