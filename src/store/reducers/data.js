import * as types from "../types/types";

const initialState = {
  height: 331,
  width: 237,
  items: []
};

const dataRIT = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_ITEM:
      const items = [...state.items];
      if (items.indexOf(action.item) === -1) {
        items.push(action.item);
      }

      return {
        ...state,
        items
      };
    
    default:
      return state;
  }
};

export default dataRIT;