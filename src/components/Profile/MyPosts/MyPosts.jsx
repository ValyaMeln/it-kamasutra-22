import React from 'react';  // React з папки node_modules
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form, Field, ErrorMessage } from 'formik';




const MyPosts = (props) => {
  // debugger;
  let postElements = props.posts.map(
    postElement => <Post message={postElement.message} likesCount={postElement.likesCount} />);

  let newPostElement = React.createRef();

  // let onAddPost = () => {
  //   props.addPost();
  // };

  // let onPostChange = () => {    //те що ми вводимо в textarea, але його не видно
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);

  // }

  // let onAddPostForm = (value) => {
  //   props.addPost();
  // };
  return (
    <div>
      <h3>My posts</h3>
      <div className={s.wrapper_textarea}>
        <UserForm onAddPost={props.addPost} />
        {/* <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            className={s.textarea}
            value={props.newPostText}
          />
        </div>
        <button onClick={onAddPost} className={s.button}>Add Post11111</button> */}
      </div>
      <ul className={s.posts}>
        {postElements}
      </ul>
    </div>
  );
}

const UserForm = (props) => {

  let onAddPostNameForm = (values) => {
    props.onAddPost(values);
  };

  return (
    <div>
      <Formik
        initialValues={{ newPostName: "" }}
        onSubmit={(values, { resetForm }) => {
          onAddPostNameForm(values.newPostName);
          resetForm({ values: '' });
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <div>
              <Field
                className={s.textarea}
                name={'newPostName'}
                component={'textarea'}
                placeholder={'Введіть новий пост'}
              />
            </div>
            <button type={'submit'} className={s.button}>
              Add Post
            </button>
          </Form>
        )}
      </Formik>

    </div>
  );
}

export default MyPosts;