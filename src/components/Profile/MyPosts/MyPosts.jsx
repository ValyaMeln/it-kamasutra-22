import React from 'react';  // React з папки node_modules
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(
    (postElement) =>
      <Post message={postElement.message} likesCount={postElement.likesCount} />
  );

  return (

    <div>
      <h3>My posts</h3>
      <div className={s.wrapper_textarea}>
        <textarea className={s.textarea}></textarea>
        <button className={s.button}>Add Post</button>
        <button className={s.button}>Remove Post</button>
      </div>
      <ul className={s.posts}>
        {
          postsElements
        }

      </ul>
    </div>

  );
}

export default MyPosts;