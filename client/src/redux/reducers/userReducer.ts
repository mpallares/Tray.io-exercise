import { Action } from '../actions/action';
import { User } from '../../types';
import { ActionType } from '../actions/actionTypes';

const initialValue: User = {
  name: '',
  role: '',
  password: '',
  email: '',
};

const userReducer = (state = initialValue, action: Action) => {
  switch (action.type) {
    case ActionType.CREATE__USER:
      return {...state, ...action.payload};
   
    default:
      return state;
  }
};

export default userReducer;
