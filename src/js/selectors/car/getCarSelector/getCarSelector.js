import { createSelector } from 'reselect';

const getCarSelector = () => createSelector(
  cars,
);

export default getCarSelector;

