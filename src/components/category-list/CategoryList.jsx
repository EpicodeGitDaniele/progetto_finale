import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getPosts } from "../../functions/Posts";
import PostItem from "../post-item/PostItem";

export default function CategoryList(){
    const {categoryId} = useParams();

    const [categoriesPost, setCategoriesPost] = useState([]);

    useEffect(() => {
        getPosts(categoryId ? [categoryId] : [])
        .then(posts => 
            {setCategoriesPost(posts);
            } );
    }, [categoryId]);
    
    const postCat = categoriesPost.map(
        categoryPost => 
        <PostItem 
        key={categoryPost.id} 
        post={categoryPost}/>) 

    

    return(
        <div className="container">
            <h1 className="text-center mt-5">POSTS FOR CATEGORY</h1>
            <div className="row">
                {postCat}
            </div>
        </div>
    )
}