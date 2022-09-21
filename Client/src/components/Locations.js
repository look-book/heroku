import React from 'react';
import LocationCard from './LocationCard';
import { posts } from './data';
//import {Link} from "react-router-dom";

function Locations() {
    return (
        <section className="contentBox">


            {posts.map(post => (
                <LocationCard key={post.id} post={post} />
            ))}


        </section>
    )
}

export default Locations;