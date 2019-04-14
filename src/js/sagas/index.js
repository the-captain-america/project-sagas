import { fork } from 'redux-saga/effects';
import getView from './view';

const sagas = [
  ...getView,
];

export default function* root() {
  yield sagas.map(fork);
}
