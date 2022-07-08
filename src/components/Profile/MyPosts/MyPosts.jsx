import React from 'react';  // React з папки node_modules
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (

    <div>
      <h3>My posts</h3>
      <h5>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove Post</button>
      </h5>
      <ul className={s.posts}>
        <Post message="post 1" like="15" />
        <Post message="post 2" like="20"/>
        <Post message="post 3" like="8"/>
        <Post message="post 4" like="22"/>
        <Post message="post 5" like="10"/>
      </ul>
    </div>

  );
}

export default MyPosts;