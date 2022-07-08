import React from 'react';  // React з папки node_modules
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (

    <div>
      <h3>My posts</h3>
      <div className={s.wrapper_textarea}>
        <textarea className={s.textarea}></textarea>
        <button className={s.button}>Add Post</button>
        <button className={s.button}>Remove Post</button>
      </div>
      <ul className={s.posts}>
        <Post message="post 1" likesCount="15" />
        <Post message="post 2" likesCount="20"/>
        <Post message="post 3" likesCount="8"/>
        <Post message="post 4" likesCount="22"/>
        <Post message="post 5" likesCount="10"/>
      </ul>
    </div>

  );
}

export default MyPosts;