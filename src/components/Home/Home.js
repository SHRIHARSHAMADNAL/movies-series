import React, { useEffect, useState } from 'react';
import './Home.scss'
import moviePlaceholder from  '../../assets/placeholder.png'
import {useNavigate} from  'react-router-dom'
export const Home = () => {
    const[activeView,setActiveView] = useState("Tiles")
   
    const navigate = useNavigate()
  
    useEffect(()=>{
      
    },[])
  return (
   <div className='homeMainContainer'>
    {activeView == "Tiles" &&
    <div className="tile-container">
      <div className="tile" onClick={() => navigate("/Series")}>
        <img src={moviePlaceholder} />
        <h3>SERIES</h3>
     
      </div>
      <div className="tile" onClick={() => navigate("/Movies")}>
      <img src={moviePlaceholder}  />
        <h3>MOVIES</h3>
      </div>
    </div>
}

   </div>
  );
};

