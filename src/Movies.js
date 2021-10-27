import React from 'react';
import Movie from './Movie';
const Movies = ({movies, removeMovie}) => {
  return <section>
    <div className='title'>
      <h2>Movie Guide</h2>
      <div classname='underline'></div>

    </div>
    <div>
      {movies.map((movie)=>{
      return<Movie key={movie.id} {...movie} removeMovie={removeMovie}></Movie>
      //the ... is a spread operator that makes it possible to get access to all the properties in the object. it is a short cut
    }
     )}

    </div>
    
  </section>
};

export default Movies;
