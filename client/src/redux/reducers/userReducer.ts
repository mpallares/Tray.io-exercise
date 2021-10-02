import { Action } from '../actions/action';
import { User } from '../../types';
import { ActionType } from '../actions/actionTypes';

const userReducer = (state = [], action: Action) => {
  switch (action.type) {
    case ActionType.CREATE__USER:
      return [...state, {...action.payload}];
   
    default:
      return state;
  }
};

export default userReducer;
