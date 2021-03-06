import { ActionUser } from '../actions/action';
import { ActionType } from '../actions/actionTypes';

export const userReducer = (state = [], action: ActionUser) => {
  switch (action.type) {
    case ActionType.CREATE__USER:
      return [...state, {...action.payload}];
   
    default:
      return state;
  }
};





