import React from "react";

export default function Overlay({ direction }: { direction: string }) {
    function generateOverlay(){
        if(direction === 'top'){
      
      return <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-secondary to-transparent"></div>
        }
        if(direction === 'bottom'){
            <div className="absolute inset-0 h-16 bg-gradient-to-b from-secondary to-transparent"></div>
        }
    }
  return (
    <>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-secondary/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-secondary"></div> */}
      {generateOverlay()}
    </>
  );
}
