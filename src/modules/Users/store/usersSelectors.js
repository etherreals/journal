import { createSelector } from 'reselect';

const gradeFilterSelector = store =>
  store.users.gradeFilter;

const namesFilterSelector = store =>
  store.users.fullNameFilter;

const genderFilterSelector = store =>
  store.users.genderFilter;

const getUsers = store =>
  store.users.users;

const getVisibleUsers = createSelector(
  [getUsers, gradeFilterSelector, namesFilterSelector, genderFilterSelector],
  (users, gradeFilter, fullNameFilter, genderFilter) => {
    const filteredUsers = users.filter((user) => {
      const grade = ['All', ''].includes(gradeFilter) ? user.grade.name : gradeFilter;
      const fullName = fullNameFilter.toLowerCase();
      const gender = ['All', ''].includes(genderFilter) ? user.gender : genderFilter;

      return user.grade.name === grade &&
        user.fullName.toLowerCase().indexOf(fullName) !== -1 &&
        user.gender === gender;
    });
    return filteredUsers;
  },
);

export default getVisibleUsers;
