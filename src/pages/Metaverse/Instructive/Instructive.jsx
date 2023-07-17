import "./instructive.css"
import React, { useEffect, useRef } from "react";

const Instructive = () => {
    const imgRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
          imgRef.current.style.display = "none";
        }, 5000);
    
        return () => clearTimeout(timer);
      }, []);
      
    return (
        <div className="container-instructive">
            <img  ref={imgRef} src="./assets/instructive/instructive.jpg" alt="instructive" />
        </div>
    )
}

export default Instructive;
