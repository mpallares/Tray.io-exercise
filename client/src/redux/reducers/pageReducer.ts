import { ActionPage } from '../actions/action';
import { ActionType } from '../actions/actionTypes';

export const pageReducer = (state = 'users', action: ActionPage) => {
  switch (action.type) {
    case ActionType.CREATE__PAGE:
      return action.payload
    default:
      return state;
  }
};