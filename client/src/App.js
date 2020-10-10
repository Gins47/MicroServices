import React from 'react';
import CreatePost from "./postCreate"
import PostList from "./postList"
function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <CreatePost />
      <hr />
     <div>
       <PostList /> 
     </div>
    </div>

  );
}

export default App;
