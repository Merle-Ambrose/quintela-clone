import React from 'react';
import './css/Article.css';

function Article({heading, details, paragArr}) {
  return (
    <>
    <div className="container article"> 
        <h1>{heading}</h1>
        <p className="details">{details}</p>
        {paragArr.map((p, index) => {
          return(
            <p key={index}>{p}</p>
          );
        })}
    </div>
      
    </>
  );
}

export default Article;
