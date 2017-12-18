import { createSelector } from 'reselect';

const getVisibilityFilter = store =>
  store.users.gradesFilter;

const getUsers = store =>
  store.users.users;


const getVisiblePupils = createSelector(
  [getUsers, getVisibilityFilter],
  (users, field) =>
    users.filter(user => user.grade.name === field),
);

export default getVisiblePupils;

