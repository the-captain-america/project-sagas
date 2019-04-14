import {
  GET_VIEW,
  GET_VIEW_FAILURE,
  GET_VIEW_SUCCESS,
} from '../types/View';

const getViewSuccess = payload => ({
  type: GET_VIEW_SUCCESS,
  payload,
});

const getViewFailure = () => ({
  type: GET_VIEW_FAILURE,
});

const getView = payload => ({
  type: GET_VIEW,
  payload,
});

export default ({ getView, getViewSuccess, getViewFailure });
