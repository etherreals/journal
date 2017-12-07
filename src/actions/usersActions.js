import orderBy from 'lodash/orderBy';
import {
  UsersActionTypes,
} from './types';
import {
  firebaseDB,
} from '../store/firebase';

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

const sortUsersActionCreator = users => ({
  type: UsersActionTypes.SORT_USERS,
  payload: {
    users,
    isLoading: false,
  },
});

// const getAllUsersFailure = error => ({
//   type: UsersActionTypes.GET_ALL_USERS_FAILURE,
//   payload: {
//     isLoading: false,
//   },
//   error,
// });

export function subscribeToGetAllPupilsListener() {
  return ((dispatch) => {
    dispatch(getAllUsersRequestActionCreator());
    const unsubscribe = firebaseDB.collection('users').where('type', '==', 'pupil').onSnapshot((querySnapshot) => {
      const users = querySnapshot.docs.map((userData) => {
        const user = userData.data();
        user.id = userData.id;
        return user;
      });
      dispatch(getAllUsersSuccessActionCreator(users));
    });
    return unsubscribe;
  });
}

export function sortUsers(users, orderingField, order) {
  return ((dispatch) => {
    const sortedUsers = orderBy(users, (user) => {
      if (orderingField === 'grade') return user.grade.name;
      return user[orderingField];
    }, [order]);
    dispatch(sortUsersActionCreator(sortedUsers));
  });
}

export function somethign() {
  return 'somethign';
}
