import React from 'react';

function LocationCard({post}) {
    return (
        <section className="contentBox">    

   
            <span class="fillerLocationBox">
   
            {post.location} <br/> {post.rating} Star Rating
            <br/>
            <img src={post.img} alt="image"/>
            </span>
          
               
            
        </section>
    )
}

export default LocationCard;