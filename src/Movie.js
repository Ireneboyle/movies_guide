import React, { useState } from 'react';

const Movie = ({id, image, info, price, name, removeMovie}) =>{
  //lets set up a state value
  const [readMore, setReadMore] = useState(false)
  return (
  <article className='single-tour'>
    <img src = {image} alt={name}/>
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      
      <p>{readMore ? info:`${info.substring(0, 200)}...`
}</p>
    <button onClick={() =>setReadMore(!readMore)}>{readMore?'show less': 'read more'} </button>
    
      <button className='delete-btn' onClick={()=>removeMovie(id)}>not interested</button>
      {/* lets work on the toggle functionality */}
    </footer>
  </article>
  );

}
  


export default Movie;
