import * as types from "../types/types";

const initialState = {
  isOpen: false
};

const appRIT = (state = initialState, action) => {
  switch (action.type) {

    case types.OPEN_DIALOG:
      return {
        ...state,
        isOpen: true
      };

    case types.CLOSE_DIALOG:
      return {
        ...state,
        isOpen: false
      };

    default:
      return state;
  }
};

export default appRIT;