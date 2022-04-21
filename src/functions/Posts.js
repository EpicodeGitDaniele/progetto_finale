import Post from "../models/Post";

export const getPosts = ( catId = [] ) => {
    return fetch(`http://localhost/bedrock/web/index.php/wp-json/wp/v2/${catId.length ? `posts?categories=${catId.join(',')+'&media&_embed'}`:'posts?media&_embed'}`) //http://localhost/bedrock/web/index.php/wp/v2/posts?_fields=author,id,content,categories,title
    .then(res => res.json())
    //.then(res => console.log(res))
    .then(posts => posts.map(post => new Post(
        post.id, 
        post.title,
        post.content,
        post.author, 
        post.categories,
        post._embedded['wp:featuredmedia'][0].source_url
    )))
    
    //http://localhost/bedrock/web/index.php/wp-json/wp/v2/${catId.length ? `posts?categories=${catId.join(',')}`:'posts&_embed'}
}

/*
export const getPostId = (catId) => {
    return fetch(`http://localhost/bedrock/web/index.php/wp-json/wp/v2/posts?categories=${catId}`) //http://localhost/bedrock/web/index.php/wp/v2/posts?_fields=author,id,content,categories,title
    .then(res => res.json())
    .then(posts => posts.map(post => new Post(
        post.id, 
        post.title,
        post.content,
        post.author, 
        post.categories
    )))
}
*/