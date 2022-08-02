import React from 'react';  // React з папки node_modules
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { maxLength30, maxLengthCreator, requiredFild } from '../../../validatorsUtils/validation/validators';




const MyPosts = (props) => {
  // debugger;
  let postElements = props.posts.map(
    postElement => <Post message={postElement.message} likesCount={postElement.likesCount} />);

  // let newPostElement = React.createRef();

  return (
    <div>
      <h3>My posts</h3>
      <div className={s.wrapper_textarea}>
        {/* <Basic /> */}
        {/* <UserForm onAddPost={props.addPost} /> */}
        <UserForm2 onAddPost={props.addPost} />
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
  const maxLength10 = maxLengthCreator(10);
  return (
    <div>
      <Formik
        initialValues={{ newPostName: "" }}
        onSubmit={(values, { resetForm }) => {
          onAddPostNameForm(values.newPostName);
          resetForm({ values: '' });
          console.log(values);
        }}

        // validate={values => {
        //   const errors = {};
        //   if (!values.newPostName) {
        //     errors.newPostName = 'Required Вимагається';
        //   }
        //   else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.newPostName)
        //   ) {
        //     errors.newPostName = 'Невірна адреса електронної пошти';
        //   } else if (values.newPostName > 0) {
        //     errors.newPostName = 'Малий запис';
        //   }
        //   return errors;
        // }}
        // validate={[requiredFild, maxLength10]}
        validationSchema={Yup.object({
          newPostName: Yup.string()
            .min(2, 'Too Short Занадто короткий!')
            .max(15, 'Must be 15 characters or less Має бути 15 символів або менше')
            .required('Required Обов\'язковий'),
          // lastName: Yup.string()
          //   .max(20, 'Must be 20 characters or less')
          //   .required('Required 2'),
          // email: Yup.string().email('Invalid email address').required('Required 3'),
        })}
      >
        {() => (
          <Form>
            <div>
              <Field
                className={s.textarea}
                name={'newPostName'}
                component={'textarea'}
                placeholder={'Введіть новий пост'}

              // validate={[requiredFild, maxLengthCreator(10)]}
              />
            </div>
            <ErrorMessage name="newPostName" component="span" />

            <button type={'submit'} className={s.button}>
              Add Post
            </button>
          </Form>
        )}
      </Formik>

    </div>
  );
}
const UserForm2 = (props) => {

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

        validationSchema={Yup.object({
          newPostName: Yup.string()
            .min(2, 'Too Short Занадто короткий!')
            .max(15, 'Must be 15 characters or less Має бути 15 символів або менше')
            .required('Required Обов\'язковий'),

        })}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field
                className={s.textarea}
                name={'newPostName'}
                component={'textarea'}
                placeholder={'Введіть новий пост'}
              />
              {errors.newPostName && touched.newPostName && (
                <span style={{ color: "red" }}>{errors.newPostName}</span>
              )}
            </div>
            {/* <ErrorMessage name="newPostName" component="span" /> */}

            <button type={'submit'} className={s.button}>
              Add Post
            </button>
          </Form>
        )}
      </Formik>

    </div>
  );
}

function validate(value) {
  let error;
  if (value.length > 3) {
    error = "max digits 3";
  } else if (parseInt(value) > 100 || parseInt(value) < 1) {
    error = "range is 1 to 100";
  }
  return error;
}
const Basic = () => (
  <div>
    <Formik
      initialValues={{
        num: ""
      }}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field type="number" name="num" validate={validate} />
          {errors.num && touched.num && (
            <div style={{ color: "red" }}>{errors.num}</div>
          )}
        </Form>
      )}
    </Formik>
  </div>
);

export default MyPosts;