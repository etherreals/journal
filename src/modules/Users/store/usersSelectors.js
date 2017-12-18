import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy';

const gradeFilterSelector = store => store.users.gradeFilter;
const namesFilterSelector = store => store.users.fullNameFilter;
const genderFilterSelector = store => store.users.genderFilter;
const orderBySelector = store => store.users.orderBy;
const orderSelector = store => store.users.order;
const getUsers = store => store.users.users;

const getVisibleUsers = createSelector(
  [
    getUsers,
    gradeFilterSelector,
    namesFilterSelector,
    genderFilterSelector,
    orderBySelector,
    orderSelector,
  ],
  (
    users,
    gradeFilter,
    fullNameFilter,
    genderFilter,
    orderByField,
    order,
  ) => {
    const filteredUsers = users.filter((user) => {
      const grade = ['All', ''].includes(gradeFilter) ? user.grade.name : gradeFilter;
      const fullName = fullNameFilter.toLowerCase();
      const gender = ['All', ''].includes(genderFilter) ? user.gender : genderFilter;

      return user.grade.name === grade &&
        user.fullName.toLowerCase().indexOf(fullName) !== -1 &&
        user.gender === gender;
    });

    const sortedUsers = orderBy(filteredUsers, (user) => {
      if (orderByField === 'grade') return user.grade.name;
      return user[orderByField];
    }, [order]);
    return sortedUsers;
  },
);

export default getVisibleUsers;
