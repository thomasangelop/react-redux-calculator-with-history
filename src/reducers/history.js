import { ADD_HISTORY_ITEM } from '../actions/history';

const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_HISTORY_ITEM: {
      return [action.payload, ...state];
    }
    default:
      return state;
  }
}