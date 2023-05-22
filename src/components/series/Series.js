import React, { useEffect, useState } from 'react';
import './Series.scss';
import fetchData from '../../service/dataService';
export const Series = () => {
  const [seriesData,setSeriesData] = useState([]);
  const [load,setLoading] = useState(true);
  useEffect(() => {
    fetchData().then(response => {
        setSeriesData(response?.entries?.filter( a => a.releaseYear > 2010 && a.programType === "series").slice(0,21).sort((a,b) => a.title.localeCompare(b.title, 'en', { numeric: true })))
        console.log(response?.entries?.filter( a => a.releaseYear > 2010 && a.programType === "series").slice(0,21).sort((a,b) => a.title.localeCompare(b.title, 'en', { numeric: true })))
        setLoading(false)
    })
  },[])
  return (
    <div className='MainContainer'>
         <div className="auxiliary-header">
      <div className="header-left">
        <h2>Popular Series</h2>
      </div>
    </div>
    {load === true &&
    <h1>Loading ....</h1>
    }
    {load === false &&
      <div className="series-container">
      {seriesData.map((series,i) => (
        <div key={i}>
        <div
          className="series-tile"
          
          style={{ backgroundImage: `url(${series.images['Poster Art']?.url})` }}
        >
           
        </div>
        <p className="tile-caption">{series.title}</p>
        </div>
        
      ))}
    </div>
}
    </div>
  );
};

