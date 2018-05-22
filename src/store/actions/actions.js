import * as types from "../types/types";

export const zoomPlus = () => ({
  type: types.ZOOM_PLUS
});

export const zoomMinus = () => ({
  type: types.ZOOM_MINUS
});

export const addItem = (item) => ({
  type: types.ADD_ITEM,
  item
});

export const removeItem = (item) => ({
  type: types.REMOVE_ITEM,
  item
});


export const openDialog = () => ({
  type: types.OPEN_DIALOG
});

export const closeDialog = () => ({
  type: types.CLOSE_DIALOG
});

