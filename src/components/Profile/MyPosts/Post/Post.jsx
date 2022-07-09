import React from 'react';  // React з папки node_modules
import s from './Post.module.css';


const Post = (props) => {
  return (

    <li className={s.item}>

      <img src="https://ivanzhytnyk.com/images/2020/103.jpg" alt="" />
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </li>


  );
}

export default Post;