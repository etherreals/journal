import { createSelector } from 'reselect';

const gradesFilterSelector = store =>
  store.users.gradesFilter;

const namesFilterSelector = store =>
  store.users.fullNamesFilter;

const getUsers = store =>
  store.users.users;

const getVisiblePupils = createSelector(
  [getUsers, gradesFilterSelector, namesFilterSelector],
  (users, gradesFilter, fullNamesFilter) => {
    const filteredUsers = users.filter((user) => {
      if (gradesFilter === 'All') {
        return user.fullName.indexOf(fullNamesFilter) !== -1;
      }
      if (fullNamesFilter === '') {
        return user.grade.name === gradesFilter;
      }
      return user.grade.name === gradesFilter &&
      user.fullName.indexOf(fullNamesFilter) !== -1;
    });
    return filteredUsers;
  },
);

export default getVisiblePupils;

