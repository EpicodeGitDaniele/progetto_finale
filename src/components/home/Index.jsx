import PostList from '../post-list/PostList'

export default function Home() {
    return (
      <div className="container">
        <h1 className='text-center mt-3'>ALL POSTS</h1>
          <PostList/>
      </div>
  
  
    );
  }