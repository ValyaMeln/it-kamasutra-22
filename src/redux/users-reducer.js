import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../validatorsUtils/object-helpers";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';
// const FAKE = 'FAKE ';

// const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


let initialState = {
  users: [],
  pageSize: 6,  //кількість юзерів, що відображаються на сторінці
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,    //додали щоб показати картинку загрузки, коли йде API запит
  followingInProgress: [],   //для того щоб наприклад при нажитті на кнопку пішов запит і нічого не відбулось, щоб користувач не неклацав багато раз одне і теж, щоб кнопка стала не активною
  fake: 10
}


const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    // case "FAKE": return{...state, fake: state.fake + 1}
    case FOLLOW: {
      return {
        ...state,
        // users: [...state.users],
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
        // users: state.users.map(u => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: true }
        //   }
        //   return u;
        // })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        // users: [...state.users],
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false })

        // users: state.users.map(u => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: false }
        //   }
        //   return u;
        // })
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
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
        // action.isFetching
      };
    }
    default:
      return state;
  }

}

//!          Action Creator(AC)

export const followSuccessAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccessAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const setUsersTotalCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgres = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsersThunk = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPageAC(currentPage));  //<<<-----  вот чего не хватало в видео
    dispatch(toggleIsFetchingAC(true));

    let data = await usersAPI.getUsers(currentPage, pageSize);
    // .then(data => {
    dispatch(toggleIsFetchingAC(false));
    dispatch(setUsersAC(data.items));
    dispatch(setUsersTotalCountAC(data.totalCount));
    // });
  }
}



const followUnfollowFlow = async (dispatch, userId, apiMetod, actionCreator) => {
  dispatch(toggleFollowingProgres(true, userId));
  let response = await apiMetod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgres(false, userId));
}

export const follow = (userId) => {
  return async (dispatch) => {
    let apiMetod = usersAPI.follow.bind(usersAPI);
    // let actionCreator = followSuccessAC;
    followUnfollowFlow(dispatch, userId, apiMetod, followSuccessAC);

    // dispatch(toggleFollowingProgres(true, userId));
    // usersAPI.follow(userId)
    //   .then(data => {
    //     if (data.resultCode === 0) {
    //       dispatch(followSuccessAC(userId));
    //     }
    //     dispatch(toggleFollowingProgres(false, userId));
    //   });
  }
}

export const unfollow = (userId) => {
  return async (dispatch) => {
    let apiMetod = usersAPI.unfollow.bind(usersAPI);
    // let actionCreator = unfollowSuccessAC;
    followUnfollowFlow(dispatch, userId, apiMetod, unfollowSuccessAC);

    // dispatch(toggleFollowingProgres(true, userId));
    // usersAPI.unfollow(userId)
    //   .then(data => {
    //     if (data.resultCode === 0) {
    //       dispatch(unfollowSuccessAC(userId));
    //     }
    //     dispatch(toggleFollowingProgres(false, userId));
    //   });
  }
}



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