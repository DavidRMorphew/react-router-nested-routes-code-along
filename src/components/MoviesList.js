import React from 'react'
import { Link } from 'react-router-dom';

const MoviesList = ({movies}) => {
    
    const renderMovies = Object.keys(movies).map(id => 
        <div key={id}>
        <Link 
            key={id} 
            to={`/movies/${id}`}>
            {movies[id].title}
        </Link>
        </div>)
    
    return(
            <div>
                {renderMovies}
            </div>
        )
    }

export default MoviesList