import {posts} from "./data";
import { useLocation } from "react-router-dom";

const AlbumIndividual = () => {
    const user = false;
    const post = posts[2];
    const location = useLocation();
    console.log(location);
return(
    <div className="AlbumIndividual">
       <img src={post.img} alt="" className="AlbumIndividualImage" />
        <h1 className="albumTitle">{post.location}</h1>
        <p className="albumRating">{post.rating}</p>
        <p className="albumTags">{post.tags}</p>
        <p className="albumDescription">{post.description}</p> 
    </div>
)}

export default AlbumIndividual;