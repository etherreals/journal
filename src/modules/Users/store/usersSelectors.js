import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy';
import { formValueSelector } from 'redux-form';

const formSelector = formValueSelector('usersFilters');

const getGradeFilter = store => (
  formSelector(store, 'gradeField') ? formSelector(store, 'gradeField') : ''
);
const getNameFilter = store => (
  formSelector(store, 'searchField') ? formSelector(store, 'searchField') : ''
);
const getGenderFilter = store => (
  formSelector(store, 'genderField') ? formSelector(store, 'genderField') : ''
);

export const getOrder = store => store.users.order;
export const getOrderBy = store => store.users.orderBy;
export const getUsers = store => store.users.users;
export const getIsLoading = store => store.users.isLoading;
export const getVisibleUsers = createSelector(
  [
    getUsers,
    getGradeFilter,
    getNameFilter,
    getGenderFilter,
    getOrderBy,
    getOrder,
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

