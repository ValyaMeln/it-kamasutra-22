import profileReducer, { addPostActionCreator } from "./profile-reducer";


let state = {
  posts: [
    { id: 1, message: 'post 1', likesCount: 15 },
    { id: 2, message: 'post 2', likesCount: 25 },
    { id: 3, message: 'post 3', likesCount: 8 },
    { id: 4, message: 'post 4', likesCount: 10 },
    { id: 5, message: 'post 5', likesCount: 17 },
  ]
}

test('length post should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator("it-valentyna.com");
  //2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts.length).toBe(6);
})
