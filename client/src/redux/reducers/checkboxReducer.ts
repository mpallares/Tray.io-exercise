import { ActionCheckbox } from '../actions/action';
import { ActionType } from '../actions/actionTypes';


export const checkboxReducer = (state = [], action: ActionCheckbox) => {
  switch (action.type) {
    case ActionType.CREATE__CHECKBOX:
      return [...state, {...action.payload}];
   
    default:
      return state;
  }
};