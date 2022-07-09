import React from 'react';  // React з папки node_modules
import s from './MyPosts.module.css';
import Post from './Post/Post';


let postsData = [
  { id: 1, message: "post 1", likesCount: 15 },
  { id: 2, message: "post 2", likesCount: 25 },
  { id: 3, message: "post 3", likesCount: 8 },
  { id: 4, message: "post 4", likesCount: 10 },
  { id: 5, message: "post 5", likesCount: 17 },
];

let postsElements = postsData.map(
  (postElement) =>
    <Post message={postElement.message} likesCount={postElement.likesCount} />
);

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
        {
          postsElements
        }

      </ul>
    </div>

  );
}

export default MyPosts;