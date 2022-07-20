import React from "react";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UN-FOLLOW';

const SET_USERS = 'SET-USERS';

const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

// const SEND_NAME = 'SEND-NAME';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 2


}


const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count
      };
    }
    default:
      return state;
  }

}

//!          Action Creator(AC)

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const setUsersTotalCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })



export default usersReducer;

 // {
    //   id: 1, photoUrl: 'https://images.pexels.com/photos/1236678/pexels-photo-1236678.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   followed: true, fullName: 'Robert', status: 'I am a boss', location: { city: 'Kyiv', country: 'Ukraine' }
    // },
  //   {
  //     id: 2, photoUrl: 'https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     followed: true, fullName: 'Patricia', status: 'I am a boss 2', location: { city: 'Minsk', country: 'Belarus' }
  //   },
  //   {
  //     id: 3, photoUrl: 'https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     followed: false, fullName: 'Elizabetht', status: 'I am a boss 3', location: { city: 'Khmelnytskyi', country: 'Ukraine' }
  //   },
  //   {
  //     id: 4, photoUrl: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     followed: true, fullName: 'Thomas', status: 'I am a boss 4', location: { city: ' Vinnytsia', country: 'Ukraine' }
  //   },
  //   {
  //     id: 5, photoUrl: 'https://images.pexels.com/photos/6617708/pexels-photo-6617708.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     followed: false, fullName: 'Anthony', status: 'I am a boss 5', location: { city: 'Zhytomyr', country: 'Ukraine' }
  //   },
  //   {
  //     id: 6, photoUrl: 'https://images.pexels.com/photos/12761421/pexels-photo-12761421.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     followed: true, name: 'Kevin', status: 'I am a boss 6', location: { city: 'Kharkiv', country: 'Ukraine' }
  //   },
  //   {
  //     id: 7, photoUrl: 'https://images.pexels.com/photos/5992535/pexels-photo-5992535.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     followed: false, name: 'Amanda', status: 'I am a boss 7', location: { city: 'Kyiv', country: 'Ukraine' }
  //   },