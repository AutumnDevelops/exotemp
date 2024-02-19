import React, { useState } from 'react';
import works_data from "../utils/works_data";
const Cards = () => {
  const [displayCount, setDisplayCount] = useState(3);
  const handleLoadMore = () => {setDisplayCount(displayCount + 3)};
  return (
    <main>
    <section id = "card_area">
      {works_data.slice(0, displayCount).map((works) => (
        <div id="card_individual" key = {works.id}>
          <img src= {require(`../assets/${works.piece}`)} alt="piece" />
        </div>
        
      ))}
    </section>
    {works_data.length > displayCount ? 
    (<button onClick={handleLoadMore}><h4>Deeper</h4></button>) :
    (
      <>
      </>      
    )}
    </main>
  );
}

export default Cards;
