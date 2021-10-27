import React, { useState, useEffect } from 'react'

import Movies from './Movies'
import data from './data'


function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(data);

  //to remove movie and we need the id property
  //using filter method which states that if the movie id doesnt match it wil placed in the new movie array and if it matches it means it is the movie i want to remove so it wont be placed in the nw array
  
  //we find how we can get the function down to the movies cpomponent and we need to pass it as a prop below
  const removeMovie = (id) =>{
    const newMovies = movies.filter((movie) =>movie.id !== id);
    setMovies(newMovies);

  }

  
  useEffect(() =>{
    if(movies.length===0){
    
    setMovies(data);

    }
  },[]);



 

  if(movies.length===0){
    return(
      <main>
        <div className='title'>
          <h2>no movies left</h2>
          <button onClick={()=>setMovies(data)}>refresh</button>
        </div>
      </main>
    )
  }
  //passing it as a prop here and destructure it in the movie component and also pass it
  return <main>
       <Movies movies={movies} removeMovie={removeMovie}/>
       {/* you can use the prop here by setting the movies equal to the state value */}
     </main>
}

export default App
