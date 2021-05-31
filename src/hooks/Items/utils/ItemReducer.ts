import { ItemReducer } from '../interfaces';

export const itemReducer: ItemReducer = (state, action) => {
  switch (action.type) {
    case 'set_loading':
      return {
        ...state,
        ...action,
      };
    case 'set_items':
      return { ...state, items: action.items };
    case 'clear_items_data':
      return {
        isLoading: false,
        items: [],
      };
    default:
      return state;
  }
};
