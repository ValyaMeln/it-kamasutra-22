import React from 'react';  // React з папки node_modules
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';



const MyPosts = (props) => {
  // debugger;
  let postElements = props.posts.map(
    postElement => <Post message={postElement.message} likesCount={postElement.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    // debugger;
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {    //те що ми вводимо в textarea, але його не видно
    let text = newPostElement.current.value;
    // console.log(props);
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
    // debugger;
    // console.log(props.updateNewPostText(text));
  }


  return (
    <div>
      <h3>My posts</h3>
      <div className={s.wrapper_textarea}>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            className={s.textarea}
            value={props.newPostText}

          />
        </div>
        <button onClick={addPost} className={s.button}>Add Post</button>
      </div>
      <ul className={s.posts}>
        {postElements}
      </ul>




    </div>

  );
}

export default MyPosts;