import React from "react";

export const Tile = ({item}) => {
  
  return (
    
    <div className="tile-container">
      {item.name ? 
      <div>
        <p className="tile-title" >{item.name}</p>
        <p className="tile" >{item.phone}</p>
        <p className="tile">{item.email}</p>
      </div> : 
      <div>
        <p className="tile-title" >{item.title}</p>
        <p className="tile" >{item.date}</p>
        <p className="tile">{item.time}</p>
        <p className="tile">{item.contact}</p>
      </div>}
       
      
       
      
         
       
    </div>
  );
};
