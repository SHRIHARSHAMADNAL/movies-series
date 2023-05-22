import React, { useEffect, useState } from 'react';
import './Movies.scss';
import fetchData from '../../service/dataService';
export const Movies = () => {
  const [movies,setMoviesData] = useState([]);
  const [load,setLoading] = useState(true);
  useEffect(() => {
    fetchData().then(response => {
        setMoviesData(response?.entries?.filter( a => a.releaseYear > 2010 && a.programType === "movie").slice(0,21).sort((a,b) => a.title.localeCompare(b.title, 'en', { numeric: true })))
        console.log(response?.entries?.filter( a => a.releaseYear > 2010 && a.programType === "movie").slice(0,21).sort((a,b) => a.title.localeCompare(b.title, 'en', { numeric: true })))
        setLoading(false)
    })
  },[])
  return (
    <div className='MainContainer'>
         <div className="auxiliary-header">
      <div className="header-left">
        <h2>Popular Movies</h2>
      </div>
    </div>
    {load === true &&
    <h1>Loading ....</h1>
    }
    {load === false &&
      <div className="series-container">
      {movies.map((movie,i) => (
        <div>
        <div
          className="series-tile"
          key={i}
          style={{ backgroundImage: `url(${movie.images['Poster Art']?.url})` }}
        >
           
        </div>
        <p className="tile-caption">{movie.title}</p>
        </div>
        
      ))}
    </div>
}
    </div>
  );
};

