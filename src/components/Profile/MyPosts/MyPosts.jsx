import React from 'react';  // React з папки node_modules
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form, Field, ErrorMessage } from 'formik';




const MyPosts = (props) => {
  // debugger;
  let postElements = props.posts.map(
    postElement => <Post message={postElement.message} likesCount={postElement.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {    //те що ми вводимо в textarea, але його не видно
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

  }


  return (
    <div>
      <h3>My posts</h3>
      <div className={s.wrapper_textarea}>
        <UserForm />
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            className={s.textarea}
            value={props.newPostText}
          />
        </div>
        <button onClick={onAddPost} className={s.button}>Add Post</button>
      </div>
      <ul className={s.posts}>
        {postElements}
      </ul>
    </div>
  );
}

const UserForm = (props) => {
  console.log("RERENDER");
  // debugger;
  return (
    <div>
      <h1 className={s.header}>
        LOGIN PAGE
      </h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false
        }}
        // validate={validateLoginForm}
        // validationSchema={validationSchemaLoginForm}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {() => (
          <Form>
            <div>
              <Field
                name={'email'}
                type={'text'}
                placeholder={'E-mail'} />
            </div>
            <ErrorMessage name="email" component="div" />

            <div>
              <Field
                name={'password'}
                type={'password'}
                placeholder={'Password'} />
            </div>
            <ErrorMessage name="password" component="div" />



            <button type="submit">Add Post</button>
          </Form>
        )}
      </Formik>

    </div>
  );
}

export default MyPosts;