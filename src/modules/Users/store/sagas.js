import UsersActionTypes from './userActionTypes';
import { firebaseDB } from '../../../store/firebase';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const getAllUsersRequestActionCreator = () => ({
  type: UsersActionTypes.GET_ALL_USERS_REQUEST,
  payload: {
    isLoading: true,
  },
});

const getAllUsersSuccessActionCreator = users => ({
  type: UsersActionTypes.GET_ALL_USERS_SUCCESS,
  payload: {
    users,
    isLoading: false,
  },
});

export function* subscribeToGetAllPupilsListener() {
  yield put(getAllUsersRequestActionCreator())
  try {

  }
  return ((dispatch) => {
    dispatch(getAllUsersRequestActionCreator());
    const unsubscribe = firebaseDB.collection('users').where('type', '==', 'pupil').onSnapshot((querySnapshot) => {
      const users = querySnapshot.docs.map((userData) => {
        const user = userData.data();
        user.id = userData.id;
        
        return user;
      });
      console.log(users)
      dispatch(getAllUsersSuccessActionCreator(users));
    });
    return unsubscribe;
  });
}


// export function subscribeToGetAllPupilsListener() {
//   return ((dispatch) => {
//     dispatch(getAllUsersRequestActionCreator());
//     const unsubscribe = firebaseDB.collection('users').where('type', '==', 'pupil').onSnapshot((querySnapshot) => {
//       const users = querySnapshot.docs.map((userData) => {
//         const user = userData.data();
//         user.id = userData.id;
//         user.grade.get().then((grade) => {
//           user.grade = grade.data();
//           return user;
//         });
//         user.id = userData.id;
//         console.log(user);
//       });
//       dispatch(getAllUsersSuccessActionCreator(users));
//     });
//     return unsubscribe;
//   });
// }

