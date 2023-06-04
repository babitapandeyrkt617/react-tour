import React, { useState } from 'react';

const Tour = ({id ,image , info ,price,name,  removeTour}) => {
  // toggle read more
  const[readMore, setReadMore] = useState(false);
  
  return (
    
    <article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      {/* if readmore true hoga to info display hoga agr nhi to para ki 200 word show krega */}
      <p>{ readMore? info:`${info.substring(0,200)}...`}
      
      {/* tooggle btn */}
      {/* agr true h to show less agr false h to read more */}
      {/* !readMore true ko false and false ko true */}
      <button onClick={()=>setReadMore(!readMore)}>
      {readMore ? 'show less':'read more'}</button>
      </p>
      
      <button className="delete-btn" onClick={() =>removeTour(id)}>
          not interested
        </button>
      </footer>
      </article>
     
  )
};

export default Tour;
