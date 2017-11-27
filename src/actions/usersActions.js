import { UsersActionTypes } from './types';
import { firebaseDB } from '../store/firebase';

const getAllUsersRequest = () => ({
  type: UsersActionTypes.GET_ALL_USERS_REQUEST,
  payload: {
    isLoading: true,
  },
});

const getAllUsersSuccess = users => ({
  type: UsersActionTypes.GET_ALL_USERS_SUCCESS,
  payload: {
    users,
    isLoading: false,
  },
});

const getAllUsersFailure = error => ({
  type: UsersActionTypes.GET_ALL_USERS_FAILURE,
  payload: {
    isLoading: false,
  },
  error,
});

export function subscribeToGetAllUsersListener() {
  return ((dispatch) => {
    dispatch(getAllUsersRequest());
    const unsubscribe = firebaseDB.collection('users').onSnapshot((querySnapshot) => {
      const users = querySnapshot.docs.map((userData) => {
        const user = userData.data();
        user.id = userData.id;
        return user;
      });
      dispatch(getAllUsersSuccess(users));
    });
    return unsubscribe;
  });
}

export function somethign() {
  return 'somethign';
}
