import { getPosts } from "../../functions/Posts";
import { useState } from "react";  
import PostItem from "../post-item/PostItem";

export default function PostList(){

    const [posts, setPosts] = useState([]);

   if(!posts.length){
    getPosts().then(posts => 
        {
            setPosts(posts);
        });
   }

   const postCard = posts.map(post => 
        <PostItem 
            key={post.id} 
            post ={post}/>) 

    

    return(
        <div className="container">
            <div className="row">
                {postCard}
            </div>
        </div>
    )
}