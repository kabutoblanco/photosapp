import { ACTION_RUNNING, ACTION_END } from '../actions/types';

const initialState = {
  isRunning: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION_RUNNING:
      return {
        ...state,
        isRunning: true,
      };
    case ACTION_END:
      return {
        ...state,
        isRunning: false,
      };
    default:
      return state;
  }
}