import { UsersActionTypes } from './types';
import { getAllPupils } from '../services/PupilsService';

const getUsers = users => ({
  type: UsersActionTypes.GET_ALL_USERS,
  payload: {
    users,
  },
});


export function getAllUsersActionCreator() {
  return (async (dispatch) => {
    try {
      const users = await getAllPupils();
      dispatch(getUsers(users));
    } catch (error) {
      throw new Error(error);
    }
  });
}

export function somethign() {
  return 'somethign';
}
