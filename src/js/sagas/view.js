
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import HTTP from '../services/http';

import {
  GET_VIEW,
} from '../types/View';

import {
  viewActions,
} from '../actions';

const mock = () => ({
    data: {
      modelId: 520,
      review: 'The Mazda MX-5 is a traditional two-seat sports car, with a lightweight body and rear-wheel drive. It has a folding, fabric roof and is among the least expensive convertibles. This fourth-generation MX-5 is fantastic fun to drive. Motoring magazine Wheels named it Car of the Year for 2016.'
  }
});

function* handleView() {
  const { data } = yield call(mock);

  if (data) {
    yield put(viewActions.getViewSuccess(data));
  }
}

function* watchforGetRequest() {
  yield takeLatest(GET_VIEW, handleView);
}

export default [
  watchforGetRequest,
];
