import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        {/* copy svg image and past it here */}
        <svg
          height="80"
          viewBox="0 0 100 100"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Loader</title>
          <defs>
            <linearGradient id="ttb" y2="1">

                {/* if you are thinking how it is animating 
                    we have added animation to svg here 
                */}

              <stop offset="100%" stopOpacity="1" stopColor="#333">
                <animate
                  attributeName="offset"
                  values="0;1;1;0"
                  repeatCount="indefinite"
                  repeatDur="05:00"
                  dur="4s"
                  begin="0s"
                />
              </stop>
              <stop offset="100%" stopOpacity="1" stopColor="#E0E0E0">
                <animate
                  attributeName="offset"
                  values="0;1;1;0"
                  repeatCount="indefinite"
                  repeatDur="05:00"
                  dur="4s"
                  begin="0s"
                />
              </stop>
              
              {/* end */}

            </linearGradient>
          </defs>
            
		   <path 
		   d="M -53.249 -81.529 C -53.249 -73.662 -59.627 -67.285 -67.493 -67.285 C -75.36 -67.285 -81.738 -73.662 -81.738 -81.529 C -81.738 -89.396 -75.36 -95.773 -67.493 -95.773 C -59.627 -95.773 -53.249 -89.396 -53.249 -81.529"
		   stroke="white"
		   stroke-width="10" fill="none"
		   
		   />
			
        </svg>
        <div className="loading-text">Cargando ...</div>
      </div>
    </div>
  );
};

export default Loader;
